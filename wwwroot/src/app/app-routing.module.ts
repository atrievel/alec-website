import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDisplayComponent } from './main-display/main-display.component';
import { ProjectsDisplayComponent } from './projects-display/projects-display.component';
import { BlogsDisplayComponent } from './blogs-display/blogs-display.component';
import { ResumeDisplayComponent } from './resume-display/resume-display.component';
import { MaintenanceSplashPageComponent } from './maintenance-splash-page/maintenance-splash-page.component';

const routes: Routes = [
  { path: '', component: MainDisplayComponent, pathMatch: 'full' },
  { path: 'about', component: MainDisplayComponent },
  { path: 'projects', component: MaintenanceSplashPageComponent },
  { path: 'blogs', component: MaintenanceSplashPageComponent },
  { path: 'resume', component: MaintenanceSplashPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
