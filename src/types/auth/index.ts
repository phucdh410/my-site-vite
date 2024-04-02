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
  fullname: string;
  username: string;
  address: string;
  phone_number: string;
}

export interface IRefreshParams {
  refresh_token: string;
}
