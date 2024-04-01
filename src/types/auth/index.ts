export interface ILoginParams {
  username: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  refresh_token: string;
}

export interface IProfile {
  id: string;
  name: string;
}

export interface IRefreshParams {
  refresh_token: string;
}
