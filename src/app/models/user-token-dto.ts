export interface UserTokenDto {
  accessToken: string;
  user: {
    id: number;
    email: string;
  }
}
