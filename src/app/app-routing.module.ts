import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { PatentsComponent } from './patents/patents.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'skills', component: SkillsComponent }, 
  { path: 'projects', component: ProjectsComponent }, 
  { path: 'cv', component: CurriculumVitaeComponent }, 
  { path: 'about', component: AboutComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'patents', component: PatentsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
