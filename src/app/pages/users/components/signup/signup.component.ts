import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { CreateUserModel } from '../../models/create-user.model';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { UserStoreState } from '../../store/reducers/user-store.reducer';
import * as UserActions from '../../store/actions/user.action';
import * as UserSelector from '../..//store/selectors/user.selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    private fb: FormBuilder,
    public router: Router
  ){
    this.singupForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
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
          this.router.navigate(['/']);
          Swal.fire({
            icon: 'success',
            title: 'User Created',
            text: 'Now LogIn to enjoid'
          });
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

  showPassWord() {
    this.showPassword = !this.showPassword;
  }

}
