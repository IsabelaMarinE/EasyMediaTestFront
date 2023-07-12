export interface ICreateUserModel {
  name: string;
  email: string;
  password: string;
}

export class CreateUserModel implements ICreateUserModel {
  name!: string;
  email!: string;
  password!: string;
}
