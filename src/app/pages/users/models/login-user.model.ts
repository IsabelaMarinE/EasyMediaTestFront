export interface ILogInModel {
  email: string;
  password: string;
}

export class LogInModel implements ILogInModel {
  email!: string;
  password!: string;
}
