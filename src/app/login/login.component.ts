import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppService } from '../services/app.service';
import { API_URL } from '../models/api_url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  show: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private authService:AuthService, private _appService:AppService) {}

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      acceptTerms: ['', [Validators.required]],
    });
  }

  showeye() {
    this.show = !this.show;
  }

  onLogin(form: any) {
    console.log(form.value);
    form.markAllAsTouched();
    if (form.invalid) {
      return;
    }
    let formData = new URLSearchParams();
    
    formData.set('email',form.value.email)
    formData.set('password',form.value.password)
    
    console.log("formData",formData)
    this._appService.post(API_URL.login,formData.toString()).subscribe(
      res=>{
        console.log(res)
      }

    )
  };
  

  get ctrl(){
    return this.loginForm.controls
  };



}
