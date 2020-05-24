import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDisplayComponent } from './main-display/main-display.component';
import { ProjectsDisplayComponent } from './projects-display/projects-display.component';
import { BlogsDisplayComponent } from './blogs-display/blogs-display.component';
import { ResumeDisplayComponent } from './resume-display/resume-display.component';

const routes: Routes = [
  { path: 'about', component: MainDisplayComponent },
  { path: 'projects', component: ProjectsDisplayComponent },
  { path: 'blogs', component: BlogsDisplayComponent },
  { path: 'resume', component: ResumeDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
