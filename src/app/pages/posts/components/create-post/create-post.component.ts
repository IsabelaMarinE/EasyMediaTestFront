import { Component, OnInit } from '@angular/core';
import { CreatePostModel } from '../../models/create-post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public createPostModel = new CreatePostModel();

  constructor(){}

  ngOnInit(): void {

  }

  createNewPost(form:NgForm){
    if(!form.valid){
      return
    }

  }
}
