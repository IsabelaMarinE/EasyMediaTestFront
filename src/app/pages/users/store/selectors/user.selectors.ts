import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromUserStore from '../reducers/user-store.reducer';

export const selectStockStoreState =
  createFeatureSelector<fromUserStore.UserStoreState>(
    fromUserStore.userStoreFeatureKey
  );

export const selectUser= createSelector(
  selectStockStoreState,
  (state: fromUserStore.UserStoreState) =>
    state.userStore.User
);

export const createUserResponse = createSelector(
  selectStockStoreState,
  (state: fromUserStore.UserStoreState) =>
    state.userStore.createUserResponse
);

export const logInResponse = createSelector(
  selectStockStoreState,
  (state: fromUserStore.UserStoreState) =>
    state.userStore.logInResponse
);

export const logOutResponse = createSelector(
  selectStockStoreState,
  (state: fromUserStore.UserStoreState) =>
    state.userStore.logoutResponse
);

export const selectErrors = createSelector(
  selectStockStoreState,
  (state: fromUserStore.UserStoreState) =>
    state.userStore.errors
);
