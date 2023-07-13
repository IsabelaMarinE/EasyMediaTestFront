import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { PostStoreState } from './store/reducers/post-store.reducer';
import * as postActions from './store/actions/post.action';
import * as postSelector from './store/selectors/post.selectors';
import { Subject, takeUntil } from 'rxjs';
import { PostModel } from './models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit  {
  public p: number = 1;
  public ngDestroyed$ = new Subject();
  public titleSearch: string = "";
  public dateSearch: Date = new Date();
  public dateSearchUser: Date = new Date();
  public idUser: string = '';
  public listPost!: Array<PostModel>;

  constructor(
    private postStore: Store<PostStoreState>,
    private route: ActivatedRoute
  ){}

  public ngOnDestroy() {
    this.postStore.dispatch(postActions.clearStoreFlags());
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      if(params.get('id') !== null){
        this.idUser = params.get('id')!;
        this.postStore.dispatch(postActions.loadPostUser({id: this.idUser}))
      }
    });
    this.storeSubscription();
  }

  private storeSubscription(){
    this.postStore
      .select(postSelector.selectAllPost)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response && response.state){
          this.listPost = _.cloneDeep(response.items);
        }
      })

    this.postStore
      .select(postSelector.loadPostByUser)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response && response.state){
          this.listPost = _.cloneDeep(response.items);
        }
      })

    this.postStore
      .select(postSelector.filterPostTitleResponse)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response && response.state){
          this.listPost = _.cloneDeep(response.items);
        }
      })

      this.postStore
      .select(postSelector.filterPostDateResponse)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        if(response && response.state){
          this.listPost = _.cloneDeep(response.items);
        }
      })
  }

  searchByTitle(){
    this.postStore.dispatch(postActions.filterPostTitle({text: this.titleSearch}));
  }

  searchByDate(){
    this.postStore.dispatch(postActions.filterPostDate({date: this.dateSearch}));
  }

  searchByDateUser(){
    this.postStore.dispatch(postActions.filterPostDate({date: this.dateSearch}));
  }

}
