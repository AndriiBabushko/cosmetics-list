import { ICosmetic } from './ICosmetic';
import { IError } from './IError';

export interface ICosmeticsResponse {
  status: number;
  data: ICosmetic[] | IError;
}
