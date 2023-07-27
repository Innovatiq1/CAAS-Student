import { Component, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/core/services/common.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { VideoPlayerComponent } from '../../video-player/video-player.component';


@Component({
  selector: 'app-completed-topic',
  templateUrl: './completed-topic.component.html',
  styleUrls: ['./completed-topic.component.css']
})
export class CompletedTopicComponent {
  courseKits: any;
  subscribeParams: Params;
  courseId!: string;

  @Input() section: any;
  constructor(    
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastrService,
    private modalServices: BsModalService,

    ){
      this.subscribeParams = this.activatedRoute.params.subscribe((params) => {
        this.courseId = params["id"];
      });
  
  this.getCourseKits()
  }
  getCourseKits(): void {
    this.commonService.getCourseById(this.courseId).subscribe((resData:any) => {
      this.courseKits = resData?.course_kit;
    },
      (error:any) => {
        console.error('Error fetching course kits:', error);
      }
    );
  }
  // playVideo(video:any): void {
  //   if (video?.url) {
  //     this.openVidePlayer(video.id);
  //   } else {
  //     this.toaster.error("Invalid video URL");
  //   }
  // }
  playVideo(video: any): void {
    if (video?.url) {
      this.openVidePlayer(video.id)
    } else {
      this.toaster.error("Invalid video URL");
    }
  }

  openVidePlayer(videoId:any): void {
    this.commonService.getVideoById(videoId).subscribe((res) => {
      const videoURL = res.videoUrl;
      if (!videoURL) {
        this.toaster.error(`Video Convert is Pending`);
        return;
      }
      const videoType = "application/x-mpegURL";
      if (videoURL) {
        const initialState: ModalOptions = {
          initialState: {
            videoURL,
            videoType,
          },
          class: "videoPlayer-modal",
        };
        this.modalServices.show(VideoPlayerComponent, initialState);
      }
    });

  }


  
  
}
