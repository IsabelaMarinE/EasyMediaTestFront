export interface IPostModel {
  idUser: string;
  title: string;
  description: string;
  createdDate: Date;
}

export class PostModel implements IPostModel {
  id!: string;
  idUser!: string;
  title!: string;
  description!: string;
  createdDate!: Date;
}
