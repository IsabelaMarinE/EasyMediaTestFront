import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/components/models/response.model';
import { PostModel } from '../models/post.model';
import { CreatePostModel } from '../models/create-post.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
    providedIn: 'root',
})
export class PostService {

    constructor(private http: HttpClient) {
    }

    filterPostTitle(text: string): Observable<ResponseModel<PostModel>> {
      return this.http.get<ResponseModel<PostModel>>(`${environment.apiUrl}/post/filter-title/${text}`, httpOptions);
    }

    filterPostDate(date: Date): Observable<ResponseModel<PostModel>> {
      return this.http.get<ResponseModel<PostModel>>(`${environment.apiUrl}/post/filter-date/${date}`, httpOptions);
    }

    filterPostDateUser(date: Date, id: string): Observable<ResponseModel<PostModel>> {
      return this.http.get<ResponseModel<PostModel>>(`${environment.apiUrl}/post/filter-date/${date}/${id}`, httpOptions);
    }

    getPosts(): Observable<ResponseModel<PostModel>> {
        return this.http.get<ResponseModel<PostModel>>(`${environment.apiUrl}/post/all-posts`, httpOptions);
    }

    getPostByUser(id: string): Observable<ResponseModel<PostModel>> {
      return this.http.post<ResponseModel<PostModel>>(`${environment.apiUrl}/post/my-posts`, id, httpOptions)
    }

    createPost(request: CreatePostModel): Observable<PostModel> {
      return this.http.post<PostModel>(`${environment.apiUrl}/post/create-post`, request, httpOptions);
    }
}
