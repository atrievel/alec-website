import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainDisplayComponent } from './main-display/main-display.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { MainDisplayNavigationComponent } from './main-display-navigation/main-display-navigation.component';
import { ProjectsDisplayComponent } from './projects-display/projects-display.component';
import { BlogsDisplayComponent } from './blogs-display/blogs-display.component';
import { ResumeDisplayComponent } from './resume-display/resume-display.component';
import { MaintenanceSplashPageComponent } from './maintenance-splash-page/maintenance-splash-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDisplayComponent,
    SocialLinksComponent,
    MainDisplayNavigationComponent,
    ProjectsDisplayComponent,
    BlogsDisplayComponent,
    ResumeDisplayComponent,
    MaintenanceSplashPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
