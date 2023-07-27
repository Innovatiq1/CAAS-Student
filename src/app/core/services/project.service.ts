import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.dev';


@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  headers_object:any = {};
  httpOptions:any;
  setHeader(){
    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.httpOptions = {
      headers: this.headers_object
    };
    return this.httpOptions;
  }
  constructor(private http: HttpClient) {}


  courseDashboard(data:any) {
    return this.http.get(`${environment.apiEndpoint}admin/studentClasses/`,{ params: data }).pipe(
      map((response) => {
        return response;
      })
    );
  }


}
