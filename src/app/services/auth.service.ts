import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

// const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserAuthenticated = false;
  private token!: string;
  private userId!: string;
  private email!: string;
  private admin_type!: string;
  private name!: string;
  private authUserStatusListner = new Subject<boolean>();

  
  constructor(  private http: HttpClient ,
    private router: Router,) { }

  isLoggedIn(){
    return localStorage.getItem('user')!=null;
  }

  // login(email: string, password: string): any {
  //   // localStorage.clear();
  //   const authData = new FormData();
  //   authData.append('email', email);
  //   authData.append('password', password);

  //   this.http.post( API_URL + '/login', authData)
  //   .subscribe(
  //     (response:any) => {
  //       console.log("response", response)
  //     const token = response.token;
  //     console.log("token", token)
  //     // this.token = token;
  //     if (response.success  === '1' && token) {
  //       // this.isUserAuthenticated = true;
  //       this.userId = response.user_id;
  //       this.email = response.email;
  //       this.admin_type = response.admin_type;
  //       this.name = response.name;
  //       this.authUserStatusListner.next(true);
  //       this.sveAuthData(token, this.userId , this.email, this.name, this.admin_type);
  //       // this.toastr.success(response.message);
       
      
  //       this.router.navigate(['/user/dashboard']);
  //     } else {
  //       this.authUserStatusListner.next(false);
  //       // this.toastr.error(response.message);
  //       location.reload();
  //     }
  //   }, error => {
  //     this.authUserStatusListner.next(false);
  //   });
  // };

  private sveAuthData(token: string, userId: string, email: string , name: string, admin_type: string): any {
    localStorage.setItem('token_interFriendAdmin', token);
    localStorage.setItem('userId_interFriendAdmin', userId);
    localStorage.setItem('email_interFriendAdmin', email);
    localStorage.setItem('name_interFriendAdmin', name);
    localStorage.setItem('admin_type_interFriendAdmin', admin_type);
  }

}
