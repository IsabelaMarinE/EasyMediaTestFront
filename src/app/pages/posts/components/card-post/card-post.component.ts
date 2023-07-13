import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../../models/card.model';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {
  @Input() description: string = "";
  @Input() title: string = "";

  public dateToday = new Date();
  public cardModel = new CardModel();

  constructor(){}

  ngOnInit() {
  }

}
