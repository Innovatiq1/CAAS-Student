import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CoursesLearningComponent } from './pages/courses-learning/courses-learning.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'onboarding/login', component: LoginComponent},
  { path: 'course', component: CoursesLearningComponent},
  { path: 'course/:id', component: CoursesLearningComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo:'onboarding/login',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
