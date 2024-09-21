export interface User {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  account_age_days?: number;
}

export interface WebAppInitData {
  query_id?: string;
  user?: User;
  auth_date: number;
  hash: string;
}

export interface WebAppInfo {
  initData: WebAppInitData;
}
