export interface ICreatePostModel {
  idUser: string;
  title: string;
  description: string;
}

export class CreatePostModel implements ICreatePostModel {
  idUser!: string;
  title!: string;
  description!: string;
}
