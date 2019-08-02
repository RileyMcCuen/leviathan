import { ContentComponent } from './content/content.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' }
    ]
  },
  {
    path: 'content',
    component: ContentComponent,
    children: []
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
