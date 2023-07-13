import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromPostStore from '../reducers/post-store.reducer';

export const selectStockStoreState =
  createFeatureSelector<fromPostStore.PostStoreState>(
    fromPostStore.postStoreFeatureKey
  );

export const selectAllPost= createSelector(
  selectStockStoreState,
  (state: fromPostStore.PostStoreState) =>
    state.postStore.allPost
);

export const createPostResponse = createSelector(
  selectStockStoreState,
  (state: fromPostStore.PostStoreState) =>
    state.postStore.createPostResponse
);

export const loadPostByUser = createSelector(
  selectStockStoreState,
  (state: fromPostStore.PostStoreState) =>
    state.postStore.postByUser
);

export const filterPostTitleResponse = createSelector(
  selectStockStoreState,
  (state: fromPostStore.PostStoreState) =>
    state.postStore.filterTitleResponse
);

export const filterPostDateResponse = createSelector(
  selectStockStoreState,
  (state: fromPostStore.PostStoreState) =>
    state.postStore.filterDateResponse
);

export const selectErrors = createSelector(
  selectStockStoreState,
  (state: fromPostStore.PostStoreState) =>
    state.postStore.errors
);
