import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import Hls from "hls.js";
import * as Plyr from "plyr";
import { environment } from "src/environments/environment.dev";


@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.css"],
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoURL!: string;
  @Input() videoType: string = "application/x-mpegURL";

  private hls = new Hls();

  @ViewChild("video", { static: true }) video: ElementRef<HTMLVideoElement> =
    {} as ElementRef<HTMLVideoElement>;

  constructor(public bsModalRef: BsModalRef) {}
  ngOnInit(): void {
   
    if (this.videoURL) this.initPlayer(this.videoURL);
  }

  initPlayer(currentVideo: string) {
    if (Hls.isSupported()) {
      this.loadVideoWithHLS(currentVideo);
    } else {
      if (
        this.video.nativeElement.canPlayType("application/vnd.apple.mpegurl")
      ) {
        this.loadVideo(currentVideo);
      }
    }
  }

  private loadVideo(currentVideo: string) {
    this.video.nativeElement.src = currentVideo;
  }

  private loadVideoWithHLS(currentVideo: string) {
    this.hls.config.xhrSetup = async function xhrSetup(xhr, url) {
      // Assuming the URL string is stored in the variable 'urlString'
      const signedURL: string = await new Promise((resolve, reject) => {
        let xhrSigned = new XMLHttpRequest();
        const key = url;
        const apiURL = environment.apiEndpoint;
        const userObject = localStorage.getItem("user_data");
        if(userObject){
        const user = JSON.parse(userObject);
        xhrSigned.open(
          "GET",
          `${apiURL}admin/video/signed/url?url=${encodeURIComponent(key)}`
        );
        xhrSigned.responseType = "json";
        xhrSigned.setRequestHeader("Authorization", `JWT ${user.token}`);
        xhrSigned.send();}

        xhrSigned.onload = function () {
          if (xhrSigned.status === 200) {
            let responseObj = xhrSigned.response;
            resolve(responseObj.data);
          } else {
            reject();
          }
        };
      });
      xhr.open("GET", signedURL);
    };
    this.hls.loadSource(currentVideo);
    this.hls.attachMedia(this.video.nativeElement);
    let defaultOptions: any = {};
    this.hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
      const avlQuality = this.hls.levels.map((l) => l.height);
      defaultOptions.quality = {
        default: avlQuality[1],
        options: avlQuality,
        forced: true,
        onChange: (e:any) => this.updateQuality(e),
      };
      new Plyr(this.video.nativeElement, defaultOptions);
    });

    this.hls.attachMedia(this.video.nativeElement);
    (window as any)["hls"] = this.hls;
  }

  updateQuality(newQuality:any) {
    (window as any)["hls"].levels.forEach((level: { height: any; }, levelIndex: any) => {
      if (level.height === newQuality) {
        (window as any)["hls"].currentLevel = levelIndex;
      }
    });
  }

  destroyModal(): void {
    // this.modal.destroy();
    this.hls.destroy();
    this.bsModalRef.hide();
  }
}
