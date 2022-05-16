import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasPermissionsGuard } from './guards/has-permissions.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path:"login",
    component:LoginComponent,
    canActivate: [HasPermissionsGuard]
  },
  {
    path:"register",
    component:RegisterComponent,
    canActivate: [HasPermissionsGuard]
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [HasPermissionsGuard]
  },
  {
    path:'profile/:id',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
