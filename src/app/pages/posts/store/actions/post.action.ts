import { createAction, props } from '@ngrx/store';
import { CreatePostModel } from '../../models/create-post.model';
import { PostModel } from '../../models/post.model';
import { ResponseModel } from 'src/app/components/models/response.model';

export const clearStoreFlags = createAction('[Post] Clear Store Flags');

export const clearPosts = createAction('[Post] Clear Posts');

export const loadPosts = createAction(
    '[Post] Load Posts'
);

export const loadPostsSuccess = createAction(
    '[Post] Load Posts Success',
    props<{ response: ResponseModel<PostModel> }>()
);

export const loadPostsFail = createAction('[Post] Load Posts Fail');

// Get Post By User
export const loadPostUser = createAction(
    '[Post] Load Post',
    props<{ id: string }>()
);

export const loadPostUserSuccess = createAction(
    '[Post] Load Post Success',
    props<{ response: ResponseModel<PostModel> }>()
)

export const loadPostUserFail = createAction(
    '[Post] Load Post Fail',
    props<{ error: any }>()
)


// Create Post
export const createPost = createAction(
    '[Post] Create Post',
    props<{ request: CreatePostModel }>()
)

export const createPostSuccess = createAction(
    '[Post] Create Post Success',
    props<{ response: PostModel }>()
)

export const createPostFail = createAction(
    '[Post] Create Post Fail'
)

// Filter Post title
export const filterPostTitle = createAction(
    '[Post] filterPostTitle Post',
    props<{ text: string }>()
)

export const filterPostTitleSuccess = createAction(
    '[Post] filterPostTitle Post Success',
    props<{ response: ResponseModel<PostModel> }>()
)

export const filterPostTitleFail = createAction(
    '[Post] filterPostTitle Post Fail',
    props<{ error: any }>()
)

// Filter Post Date
export const filterPostDate = createAction(
  '[Post] filterPostDate Post',
  props<{ date: Date }>()
)

export const filterPostDateSuccess = createAction(
  '[Post] filterPostDate Post Success',
  props<{ response: ResponseModel<PostModel> }>()
)

export const filterPostDateFail = createAction(
  '[Post] filterPostDate Post Fail',
  props<{ error: any }>()
)
