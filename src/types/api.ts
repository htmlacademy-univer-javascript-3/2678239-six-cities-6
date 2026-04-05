export type AuthRequest = {
  email: string;
  password: string;
};

export type AuthInfo = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};
