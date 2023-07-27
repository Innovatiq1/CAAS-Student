import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UtilsService } from 'src/app/core/services/utils.service';
import {
  BsModalRef,
} from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmitted=false;
  loginForm: FormGroup;
  showPassword: boolean = false;
  loginType: any = 'student';
  @Output() loginSuccessEvent: EventEmitter<boolean> = new EventEmitter<
  boolean
>();


constructor(
  private fb:FormBuilder,
  public utils:UtilsService,
  private router: Router,
  private authService: AuthService,
  private bsModalRef: BsModalRef,
  private toaster: ToastrService

  ){
  this.loginForm= this.fb.group({
    email:['',[Validators.required,...this.utils.validators.email,...this.utils.validators.noLeadingSpace]],
    password: ['',[ Validators.required,...this.utils.validators.noLeadingSpace]],

  })

}
ngOnInit(){

}
login(){
  if(this.loginForm.valid){


  const loginFromdata   = this.loginForm.getRawValue();
  loginFromdata['logintype'] = this.loginType;
  this.authService.checkloginpassword(loginFromdata).subscribe(
    (response:any) => {
        if(response?.data?.passwordChange == true)
        {
          this.router.navigateByUrl('/resetPassword/'+response?.data?._id);
        }
        else
        {
          this.authService.login(loginFromdata).subscribe(
            (res:any) => {
              this.toaster.success(res.message);
              this.router.navigate(['/dashboard']);
              localStorage.setItem("fetchcurrentUserRole",res?.data?.user?.type);
              this.onLoginEvent();
            },
            (err:any) => {
              this.toaster.error(err.error.message)
            },
          );
      }
    },
    (err:any) => {
      this.toaster.error('User not found');
      return;
    },
  );

    if(loginFromdata.remember){
      localStorage.setItem("clg-email",loginFromdata.email)
    }else{
    localStorage.removeItem("clg-email")
  }
} else{
  this.isSubmitted=true;
}
}
onLoginEvent(event?:any) {
  this.loginSuccessEvent.emit(true);
}

onClick() {
  this.showPassword = !this.showPassword;
}

}
