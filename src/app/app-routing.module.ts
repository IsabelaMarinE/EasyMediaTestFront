import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './auth/login-guard.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },
  { path: 'posts', canActivate: [ LoginGuardGuard ], loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
