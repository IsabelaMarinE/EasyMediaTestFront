import { createAction, props } from '@ngrx/store';
import { CreateUserModel } from '../../models/create-user.model';
import { UserModel } from '../../models/user.model';
import { LogInModel } from '../../models/login-user.model';
import { ResponseModel } from 'src/app/components/models/response.model';

export const clearStoreFlags = createAction('[User] Clear Store Flags');

export const clearUsers = createAction('[User] Clear Users');

export const loadUsers = createAction(
    '[User] Load Users'
);

export const loadUsersSuccess = createAction(
    '[User] Load Users Success',
    props<{ response: ResponseModel<UserModel> }>()
);

export const loadUsersFail = createAction('[User] Load Users Fail');

// Get User
export const loadUser = createAction(
    '[User] Load User',
    props<{ email: String }>()
);

export const loadUserSuccess = createAction(
    '[User] Load User Success',
    props<{ response: ResponseModel<UserModel> }>()
)

export const loadUserFail = createAction(
    '[User] Load User Fail'
)


// Create User
export const createUser = createAction(
    '[User] Create User',
    props<{ request: CreateUserModel }>()
)

export const createUserSuccess = createAction(
    '[User] Create User Success',
    props<{ response: UserModel }>()
)

export const createUserFail = createAction(
    '[User] Create User Fail'
)

// LogIn
export const logIn = createAction(
    '[User] Login User',
    props<{ request: LogInModel }>()
)

export const logInSuccess = createAction(
    '[User] Login User Success',
    props<{ response: ResponseModel<UserModel> }>()
)

export const logInFail = createAction(
    '[User] Login User Fail',
    props<{ error: any }>()
)

// LogOut
export const logOut = createAction(
  '[User] LogOut User',
  props<{ id: Number}>()
)

export const logOutSuccess = createAction(
  '[User] LogOut User Success',
  props<{ response: ResponseModel<any> }>()
)

export const logOutFail = createAction(
  '[User] Login User Fail',
  props<{ error: any }>()
)

