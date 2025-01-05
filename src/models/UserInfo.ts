import {Country} from "./Country.ts";

export interface UserInfo {
  first_name: string;
  last_name: string;
  gender: boolean;
  email: string;
  birthday?: number;
  phoneNumber?: string;
  country?: Country;
  enable_on_chain_statistics?: string;
}