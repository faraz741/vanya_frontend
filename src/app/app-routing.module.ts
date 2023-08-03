import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { PartnersComponent } from './partners/partners.component';
import { ForBusinessComponent } from './for-business/for-business.component';
import { TechComponent } from './tech/tech.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ForCompaniesComponent } from './for-companies/for-companies.component';
import { ForNgoComponent } from './for-ngo/for-ngo.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EarthEngineComponent } from './earth-engine/earth-engine.component';

const routes: Routes = [
  // {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'home', component:HomeComponent},
  {path:'forgotPassword', component:ForgotPasswordComponent},
  {path:'about', component:AboutComponent, canActivate:[AuthGuard]},
  {path:'products', component:ProductsComponent, canActivate:[AuthGuard]},
  {path:'partners', component:PartnersComponent, canActivate:[AuthGuard]},
  {path:'business', component:ForBusinessComponent, canActivate:[AuthGuard]},
  {path:'tech', component:TechComponent, canActivate:[AuthGuard]},
  {path:'contact_us', component:ContactUsComponent, canActivate:[AuthGuard]},
  {path:'career', component:CareerComponent, canActivate:[AuthGuard]},
  {path:'privacyPolicy', component:PrivacyPolicyComponent, canActivate:[AuthGuard]},
  {path:'terms-condition', component:TermsConditionsComponent, canActivate:[AuthGuard]},
  {path:'for_companies', component:ForCompaniesComponent, canActivate:[AuthGuard]},
  {path:'for_ngo', component:ForNgoComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
