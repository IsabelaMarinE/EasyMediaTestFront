import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CardPostComponent } from './components/card-post/card-post.component';


@NgModule({
  declarations: [
    PostsComponent,
    CreatePostComponent,
    CardPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
