export interface ILogInModel {
  name: string;
  email: string;
  password: string;
}

export class LogInModel implements ILogInModel {
  name!: string;
  email!: string;
  password!: string;
}
