import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() {
  }

  validationMessages: any = {
    'email': [
      { type: 'required', message: 'Enter Email' },
      { type: 'pattern', message: 'Enter a valid email' },
    ],
    'password': [
        { type: 'required', message: 'Enter Password' },
      ],
  

  };

  validators: any = {
    title: [Validators.required, Validators.minLength(2), Validators.maxLength(255)],
    course_duration_in_days: [Validators.required, Validators.min(1), Validators.pattern(/^\d+(\.\d+)?$/)],
    training_hours: [Validators.required, Validators.max(24), Validators.min(0.5), Validators.pattern(/^\d+(\.\d+)?$/)],
    fee: [Validators.required, Validators.min(0), Validators.max(99999999), Validators.pattern(/^\d+(\.\d+)?$/)],
    course: [Validators.required, Validators.maxLength(255)],
    longDescription: [Validators.required, Validators.maxLength(999)],
    website: [Validators.required, Validators.maxLength(255), Validators.pattern(/^(https?:\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/)],
    pdu: [Validators.required, Validators.min(0), Validators.max(999), Validators.pattern(/^\d+(\.\d+)?$/)],
    category_name:[Validators.required,Validators.minLength(2),Validators.maxLength(255)],
    onlyAlphabets: [Validators.pattern(/^[a-zA-Z\s]+$/)],
    noLeadingSpace: [Validators.pattern(/^\S/), (control: AbstractControl) => {
      if (Array.isArray(control.value)) {
        if (control && control.value && !control.value[0]?.trim().length) {
          control.setValue('');
        }
      }
      else {
        if (control && control.value && !control.value?.trim().length) {
          control.setValue('');
        }
      }
      return null;
    }],
    email: [Validators.pattern(/^\w+([\.\+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,15})+$/),
    (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return {
          required: true
        }
      }
      else {
        return null;
      }
    }],

  };
  getErrorMessage(userForm: FormGroup, key: string) {
    let err = this.validationMessages[key].find((val: any) => {
      return userForm?.get(key)?.hasError(val.type);
    });
    return err;
  }
}
