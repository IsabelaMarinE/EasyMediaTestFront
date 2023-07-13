import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { CreateUserModel } from '../../models/create-user.model';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { UserStoreState } from '../../store/reducers/user-store.reducer';
import * as UserActions from '../../store/actions/user.action';
import * as UserSelector from '../..//store/selectors/user.selectors';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {
  public ngDestroyed$ = new Subject();
  public createUserModel = new CreateUserModel();
  public userModel = new UserModel();
  public errors: any;
  singupForm: FormGroup;
  public showPassword = false;
  public confirmPassword = '';

  constructor(
    private userStore: Store<UserStoreState>,
    private fb: FormBuilder
  ){
    this.singupForm = this.fb.group({
      fullName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  get f() { return this.singupForm.controls; }

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
      .select(UserSelector.createUserResponse)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response){
          this.userModel = _.cloneDeep(response);
        }
      })

      this.userStore
      .select(UserSelector.selectErrors)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response){
          this.errors = response;
        }
      })
  }

  createUser(){
    let request;
    if (this.singupForm.invalid) {
      return;
    }
    request = new CreateUserModel();
    request = _.merge(request, this.singupForm.value);
    this.userStore.dispatch(UserActions.createUser({request}));
    this.singupForm.reset();
  }

  isPasswordEqual(data:any) {
    this.confirmPassword = data;
    if(this.createUserModel.password !== this.confirmPassword){

    }
  }

  showPassWord() {
    this.showPassword = !this.showPassword;
  }

}
