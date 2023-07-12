export interface IUserModel {
  name: string;
  email: string;
  password: string;
}

export class UserModel implements IUserModel {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
}
