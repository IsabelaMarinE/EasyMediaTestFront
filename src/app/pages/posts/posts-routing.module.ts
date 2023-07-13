import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'create-post', component: CreatePostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
