export interface IAuthBody {
  username: string;
  password: string;
}

export interface IAuthResponseDTO {
  accessToken: string;
  refreshToken?: string; //TODO: Check ?
}
