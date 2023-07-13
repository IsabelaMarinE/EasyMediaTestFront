import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogInModel } from '../../models/login-user.model';
import { Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { UserStoreState } from '../../store/reducers/user-store.reducer';
import * as UserActions from '../../store/actions/user.action';
import * as UserSelector from '../..//store/selectors/user.selectors';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public ngDestroyed$ = new Subject();
  public logInModel = new LogInModel();
  public userModel = new UserModel();
  public showPassword = false;

  constructor(
    private userStore: Store<UserStoreState>,
  ){}

  public ngOnDestroy() {
    this.userStore.dispatch(UserActions.clearStoreFlags());
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  ngOnInit() {
    this.storeSubscription();
  }

  private storeSubscription(){
    this.userStore
      .select(UserSelector.logInResponse)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response){
          this.userModel = _.cloneDeep(response.items[0]);
        }
      })
  }

  logInUser(form:NgForm){
    if(form.valid){
      let request;
    }
  }

  showPassWord() {
    this.showPassword = !this.showPassword;
  }



}
