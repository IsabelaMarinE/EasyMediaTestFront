import { combineReducers } from '@ngrx/store';

//Reducers
import { PostReducer } from './post.reducer';

//States
import { PostState } from './post.reducer';

export const postStoreFeatureKey = 'PostStore';

export type PostStoreState = {
  postStore: PostState
};

export const postStoreReducer = combineReducers<PostStoreState>({
  postStore: PostReducer
});
