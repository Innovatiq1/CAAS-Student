import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, BehaviorSubject, Subject, throwError } from "rxjs";
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { DomSanitizer } from "@angular/platform-browser";
import { catchError } from "rxjs/operators";
import { CourseEditModel } from "../models/common.model";


@Injectable({
  providedIn: "root",
})
export class CommonService {
  $isAvatarChanged = new BehaviorSubject<boolean>(false);
  private locationChanged = new Subject<any>();
  $isBannerImageChanged = new BehaviorSubject<boolean>(false);
  public subscribProfileForm = new Subject();

  constructor(private http: HttpClient, private authService: AuthService, private sanitizer: DomSanitizer) { }


  getCourseById(id: string) {
    const apiUrl = `${environment.apiEndpoint}admin/courses-new/${id}`;
    return this.http.get<CourseEditModel>(apiUrl).pipe(map((response) => response));
  }

  getVideoById(videoId: string): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}admin/video/${videoId}`;
    return this.http
      .get<any>(apiUrl)
      .pipe(map((response) => response.data));
  }

}
