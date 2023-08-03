import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { AppService } from '../services/app.service';
import { AuthService } from '../services/auth.service';
import { API_URL } from '../models/api_url';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm!:FormGroup
  show: boolean = false;


  items = [
    {id: 1, section: 'SECTION A - AGRICULTURE, FORESTRY AND FISHERIES'},
    {id: 2, section: 'SECTION B - MINING AND QUARRYING'},
    {id: 3, section: 'SECTION C - MANUFACTURING'},
  ];
  items2 = [
    {id: 1, manufacture: 'Manufacture of food products'},
    {id: 2, manufacture: 'Beverage production'},
    {id: 3, manufacture: 'Manufacture of tobacco products'},
  ];
  items3 = [
    {id: 1, area: 'ESG (GRI)'},
    {id: 2, area: 'CO2 (ISO14064)'},
    {id: 3, area: 'CSRD (ESRS)'},
    {id: 4, area: 'SFDR'}
  ];
  items4 = [
    {id: 1, country: 'Algeria'},
    {id: 2, country: 'India'},
    {id: 3, country: 'Canada'}

  ];

  selected:any = [];
  selected2:any= [];
  selected3:any= [];
  selected4:any= [];

  constructor(private router: Router, private fb:FormBuilder, private authService:AuthService, private _appService:AppService){

  }

  ngOnInit(): void {
    this.signUpForm =this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      number: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      vatNumber: ['', [Validators.required]],
      correspondanceAddress: [''],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      password: ['', [Validators.required]],
      privacyCheckbox: ['', [Validators.required]],
    })


}


showeye(){
  this.show = !this.show;
 }

 onSelectItems(){
  console.log(this.selected4)
 }
 signup(form:any){
  console.log(form)
  console.log(this.selected, 1)
  console.log(this.selected2,2)
  console.log(this.selected3,3)
  console.log(this.selected4,4)
  console.log(form.value);
  form.markAllAsTouched();
  if (form.invalid) {
    return;
  }
  console.log("clicked")
  let formData = new URLSearchParams();
  formData.set('first_name',form.value.firstName)
  formData.set('last_name',form.value.lastName)
  formData.set('email',form.value.email)
  formData.set('password',form.value.password)
  formData.set('phone',form.value.number)
  formData.set('company_name',form.value.companyName)
  formData.set('vat_number',form.value.vatNumber)
  formData.set('industry',this.selected.section)
  formData.set('features',this.selected2.manufacture)
  formData.set('area',this.selected3.area)
  formData.set('street',form.value.street)
  formData.set('city',form.value.city)
  formData.set('zip',form.value.zip)
  formData.set('country',this.selected4.country)
  console.log("formData",formData)

 
this._appService.post(API_URL.signup ,formData.toString()).subscribe(
  res=>{
    console.log(res)
  }
)


 }


}
