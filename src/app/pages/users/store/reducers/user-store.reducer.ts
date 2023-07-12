import { combineReducers } from '@ngrx/store';

//Reducers
import { UserReducer } from './user.reducer';

//States
import { UserState } from './user.reducer';

export const userStoreFeatureKey = 'UserStore';

export type UserStoreState = {
  userStore: UserState
};

export const userStoreReducer = combineReducers<UserStoreState>({
  userStore: UserReducer
});
