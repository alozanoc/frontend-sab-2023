import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingHeaderComponent } from './shared/landing-header/landing-header.component';
import { LandingFooterComponent } from './shared/landing-footer/landing-footer.component';
import { LandingComponent } from './landing.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    LandingHeaderComponent,
    LandingFooterComponent,
    LandingComponent,
    PrivacyComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
