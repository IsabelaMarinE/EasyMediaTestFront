import { Action, createReducer, on } from '@ngrx/store';
import { PostModel } from '../../models/post.model';
import * as PostActions from '../actions/post.action';
import { ResponseModel } from 'src/app/components/models/response.model';

export const PostFetureKey = 'Post';

export interface PostState {
    allPost: ResponseModel<PostModel> | undefined;
    createPostResponse: PostModel | undefined;
    postByUser: ResponseModel<PostModel> | undefined;
    filterTitleResponse: ResponseModel<PostModel> | undefined;
    filterDateResponse: ResponseModel<PostModel> | undefined;
    errors: any| undefined;
}

export const initialPostState: PostState = {
  allPost: undefined,
  createPostResponse: undefined,
  postByUser: undefined,
  filterTitleResponse: undefined,
  filterDateResponse: undefined,
  errors: undefined,
};

export const PostReducer = createReducer(
  initialPostState,
    on(PostActions.clearStoreFlags, (state: PostState) => ({
        ...state,
        allPost: undefined,
        createPostResponse: undefined,
        postByUser: undefined,
        filterTitleResponse: undefined,
        filterDateResponse: undefined,
        errors: undefined,
    })),

    // Get All Posts
    on(PostActions.loadPosts, (state: PostState) => ({
        ...state,
        allPost: undefined
    })),
    on(PostActions.loadPostsSuccess, (state: PostState, { response }) => ({
        ...state,
        allPost: response
    })),
    on(PostActions.loadPostsFail, (state: PostState) => ({
        ...state,
        allPost: undefined
    })),

    // Create Post
    on(PostActions.createPost, (state: PostState) => ({
        ...state,
        createPostResponse: undefined
    })),
    on(PostActions.createPostSuccess, (state: PostState, { response }) => ({
        ...state,
        createPostResponse: response
    })),
    on(PostActions.createPostFail, (state: PostState) => ({
        ...state,
        createPostResponse: undefined
    })),

    // Load Post By User
    on(PostActions.loadPostUser, (state: PostState) => ({
        ...state,
        postByUser: undefined
    })),
    on(PostActions.loadPostUserSuccess, (state: PostState, { response }) => ({
        ...state,
        postByUser: response
    })),
    on(PostActions.loadPostUserFail, (state: PostState, { error }) => ({
        ...state,
        errors: error
    })),

    // Filter post by Title
    on(PostActions.filterPostTitle, (state: PostState) => ({
        ...state,
        filterTitleResponse: undefined
    })),
    on(PostActions.filterPostTitleSuccess, (state: PostState, { response }) => ({
        ...state,
        filterTitleResponse: response
    })),
    on(PostActions.filterPostTitleFail, (state: PostState, { error }) => ({
        ...state,
        errors: error
    })),

    // Filter post by Date
    on(PostActions.filterPostDate, (state: PostState) => ({
      ...state,
      filterDateResponse: undefined
  })),
  on(PostActions.filterPostDateSuccess, (state: PostState, { response }) => ({
      ...state,
      filterDateResponse: response
  })),
  on(PostActions.filterPostDateFail, (state: PostState, { error }) => ({
      ...state,
      errors: error
  })),
);

export function PostReducerFunc(
    state: PostState | undefined,
    action: Action
): any {
    return PostReducerFunc(state, action);
}

