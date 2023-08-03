import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared components/header/header.component';
import { FooterComponent } from './shared components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { PartnersComponent } from './partners/partners.component';
import { ForBusinessComponent } from './for-business/for-business.component';
import { TechComponent } from './tech/tech.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ForCompaniesComponent } from './for-companies/for-companies.component';

import { ForFarmersComponent } from './for-farmers/for-farmers.component';
import { ForNgoComponent } from './for-ngo/for-ngo.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EarthEngineComponent } from './earth-engine/earth-engine.component';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    PartnersComponent,
    ForBusinessComponent,
    TechComponent,
    ContactUsComponent,
    CareerComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    ForCompaniesComponent,
    ForFarmersComponent,
    ForNgoComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    EarthEngineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
