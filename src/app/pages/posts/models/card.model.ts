export interface ICardModel {
  date: Date;
  title: string;
  description: string;
}

export class CardModel implements ICardModel {
  date!: Date;
  title!: string;
  description!: string;
}
