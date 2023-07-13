import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import * as PostActions from '../actions/post.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PostService } from '../../services/post.service';

@Injectable()
export class PostEffects {
  getPosts$ = createEffect(() =>
  this.actions$.pipe(
      ofType(PostActions.loadPosts),
      switchMap(() =>
          from(this.postService.getPosts()).pipe(
              map((response) => {
                  return PostActions.loadPostsSuccess({ response })
              }),
              catchError(() => {
                  return of(PostActions.loadPostsFail());
              })
          )
      )
  )
)
  getPostByUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostActions.loadPostUser),
            switchMap((action) =>
                from(this.postService.getPostByUser(action.id)).pipe(
                    map((response) => {
                        return PostActions.loadPostUserSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(PostActions.loadPostUserFail({error}));
                    })
                )
            )
        )
    )

    createPost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostActions.createPost),
            switchMap((action) =>
                from(this.postService.createPost(action.request)).pipe(
                    map((response) => {
                        return PostActions.createPostSuccess({ response })
                    }),
                    catchError(() => {
                        return of(PostActions.createPostFail());
                    })
                )
            )
        )
    )

    filterPostTitle$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostActions.filterPostTitle),
            switchMap((action) =>
                from(this.postService.filterPostTitle(action.text)).pipe(
                    map((response) => {
                        return PostActions.filterPostTitleSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(PostActions.filterPostTitleFail(error))
                    })
                )
            )
        )
    )

    filterPostDate$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostActions.filterPostDate),
            switchMap((action) =>
                from(this.postService.filterPostDate(action.date)).pipe(
                    map((response) => {
                        return PostActions.filterPostDateSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(PostActions.filterPostDateFail(error))
                    })
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private postService: PostService
    ) {

    }
}

