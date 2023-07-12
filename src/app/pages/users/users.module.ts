import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../users/store/effects/user.effects';
import { userStoreReducer, userStoreFeatureKey } from '../users/store/reducers/user-store.reducer';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    UsersComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature(userStoreFeatureKey, userStoreReducer),
    EffectsModule.forFeature(UserEffects)
  ]
})
export class UsersModule { }
