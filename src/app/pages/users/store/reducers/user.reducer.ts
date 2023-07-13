import { Action, createReducer, on } from '@ngrx/store';
import { UserModel } from '../../models/user.model';
import * as UserActions from '../actions/user.action';
import { ResponseModel } from 'src/app/components/models/response.model';

export const UserFetureKey = 'User';

export interface UserState {
    User: ResponseModel<UserModel> | undefined;
    createUserResponse: UserModel | undefined;
    logInResponse: ResponseModel<UserModel> | undefined;
    logoutResponse: ResponseModel<any> | undefined;
    errors: any| undefined;
}

export const initialUserState: UserState = {
    User: undefined,
    createUserResponse: undefined,
    logInResponse: undefined,
    logoutResponse: undefined,
    errors: undefined
};

export const UserReducer = createReducer(
  initialUserState,
    on(UserActions.clearStoreFlags, (state: UserState) => ({
        ...state,
        StocksResponse: undefined,
        createStockResponse: undefined,
        Stock: undefined,
        updateStockResponse: undefined,
        deleteStockResponse: undefined,
        errors: undefined
    })),

    // Get User
    on(UserActions.loadUser, (state: UserState) => ({
        ...state,
        User: undefined
    })),
    on(UserActions.loadUserSuccess, (state: UserState, { response }) => ({
        ...state,
        User: response
    })),
    on(UserActions.loadUserFail, (state: UserState) => ({
        ...state,
        User: undefined
    })),

    // Create User
    on(UserActions.createUser, (state: UserState) => ({
        ...state,
        createUserResponse: undefined
    })),
    on(UserActions.createUserSuccess, (state: UserState, { response }) => ({
        ...state,
        createUserResponse: response
    })),
    on(UserActions.createUserFail, (state: UserState) => ({
        ...state,
        createUserResponse: undefined
    })),

    // Log In
    on(UserActions.logIn, (state: UserState) => ({
        ...state,
        logInResponse: undefined
    })),
    on(UserActions.logInSuccess, (state: UserState, { response }) => ({
        ...state,
        logInResponse: response
    })),
    on(UserActions.logInFail, (state: UserState, { error }) => ({
        ...state,
        errors: error
    })),

    // Log Out
    on(UserActions.logOut, (state: UserState) => ({
        ...state,
        logoutResponse: undefined
    })),
    on(UserActions.logOutSuccess, (state: UserState, { response }) => ({
        ...state,
        logOutResponse: response
    })),
    on(UserActions.logOutFail, (state: UserState) => ({
        ...state,
        logoutResponse: undefined
    }))
);

export function userReducerFunc(
    state: UserState | undefined,
    action: Action
): any {
    return userReducerFunc(state, action);
}

