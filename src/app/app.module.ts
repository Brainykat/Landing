import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { LandingHeroComponent } from './landing-hero/landing-hero.component';
import { LandingFeatureComponent } from './landing-feature/landing-feature.component';
import { LandingAboutComponent } from './landing-about/landing-about.component';
import { LandingWhyUsComponent } from './landing-why-us/landing-why-us.component';
import { LandingSubscribeComponent } from './landing-subscribe/landing-subscribe.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { LandingScrollTopComponent } from './landing-scroll-top/landing-scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingHeaderComponent,
    LandingHeroComponent,
    LandingFeatureComponent,
    LandingAboutComponent,
    LandingWhyUsComponent,
    LandingSubscribeComponent,
    LandingFooterComponent,
    LandingScrollTopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
