export interface ILogInResponseModel {
  id: string;
  token: string;
}

export class LogInResponseModel implements ILogInResponseModel {
  id!: string;
  token!: string;
}
