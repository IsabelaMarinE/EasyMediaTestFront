import { Component, OnInit } from '@angular/core';
import { CreatePostModel } from '../../models/create-post.model';
import * as _ from 'lodash';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as postActions from '../../store/actions/post.action';
import * as postSelector from '../../store/selectors/post.selectors';
import { Subject, takeUntil } from 'rxjs';
import { PostStoreState } from '../../store/reducers/post-store.reducer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  public ngDestroyed$ = new Subject();
  public createPostModel = new CreatePostModel();

  constructor(
    private postStore: Store<PostStoreState>,
  ){}

  ngOnInit() {
    this.storeSubscription();
  }

  public ngOnDestroy() {
    this.postStore.dispatch(postActions.clearStoreFlags());
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  private storeSubscription(){
    this.postStore
      .select(postSelector.createPostResponse)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response){
          Swal.fire({
            icon: 'success',
            title: 'Post Created',
          });
        }
      })

      this.postStore
      .select(postSelector.selectErrors)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response){
          Swal.fire({
            icon: 'error',
            title: 'Uppss Try Later',
          });
        }
      })
  }

  createNewPost(form:NgForm){
    let request;
    if(!form.valid){
      return
    }
    request = new CreatePostModel();
    request = _.merge(request, this.createPostModel);
    this.postStore.dispatch(postActions.createPost({request}));
    this.createPostModel = new CreatePostModel();
  }
}
