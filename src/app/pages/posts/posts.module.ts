import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/effects/post.effects';
import { postStoreFeatureKey, postStoreReducer } from './store/reducers/post-store.reducer';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    PostsComponent,
    CreatePostComponent,
    CardPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PostsRoutingModule,
    ComponentsModule,
    NgxPaginationModule,
    StoreModule.forFeature(postStoreFeatureKey, postStoreReducer),
    EffectsModule.forFeature(PostEffects)
  ],
  exports: [
    CardPostComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PostsModule { }
