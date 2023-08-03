import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { API_URL } from '../models/api_url';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient,
    private router: Router) { }
    
    get(url:any):Observable<any>{
      return this.http.get(environment.baseUrl+ url)
    }
    
    
    post(url:any,data:any,):Observable<any>{
      const headers = new HttpHeaders()
      .set('content-type','application/x-www-form-urlencoded')
      .set('Access-Control-Allow-Origin', '*');  
      return this.http.post(environment.baseUrl + url, data,{'headers':headers})
    }
}
// {'headers':headers}
