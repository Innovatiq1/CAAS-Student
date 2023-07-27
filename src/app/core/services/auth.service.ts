import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Subject, Observable, BehaviorSubject,throwError } from 'rxjs';
import { AuthModalType } from '../enums/login.enum';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { ApiGenericResponse } from '../models/response.model';
import { map } from 'rxjs/operators';
// import { AppConstants } from 'src/app/shared/constants/app.constants';
import { AuthType } from '../enums/auth-type.enum';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { AuthDialogComponent } from 'src/app/shared/components/auth-dialog/auth-dialog.component';
// import { StaticDataService } from './static-data.service';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import {  Student } from '../models/user.model';
import { UserType } from '../enums/user-type.enum';
import { catchError } from 'rxjs/operators';
import { AppConstants } from 'src/app/common/constants/app.constants';
import { environment } from 'src/environments/environment.dev';
// import { StudentService } from 'src/app/core/services/student.service';

interface AuthModalSubject {
  show: boolean;
  type: AuthModalType;
  redirectUrl?: string;
}

// const log = new Logger('AuthService');

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authModal$: Subject<AuthModalSubject> = new Subject();

  public totalLeftRewardPoint1: any = localStorage.getItem('totalLeftRewardPoint');
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private http: HttpClient,
    private router: Router,
  ) {
  }
  login(formData:any) {
    return this.http
      .post<any>(`${environment.apiEndpoint}auth/login`, formData)
      .pipe(
        map((res) => {
          var user_id = res.data.user._id;
          this.saveUserInfo(res.data);
        //   this.setReward(user_id);
          // this.saveUserIn(res);
          return res;
        })
      );
  }
  saveUserInfo(info:any) {
    // this.loadStaticData();
    //console.log("ths is static data",info);
    localStorage.setItem(AppConstants.KEY_USER_DATA, JSON.stringify(info));
    // this.currentUser.next(info);
  }
  


  checkloginpassword = (data:any): Observable<any> => {
    const endpoint = environment.apiNewEndpoint+'forget/profile/checkloginpassword';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  }
  getUserInfo(): { user: { _id: string } } | null {
    const userData = localStorage.getItem(AppConstants.KEY_USER_DATA);
    return userData ? JSON.parse(userData) : null;
  }
    


}
