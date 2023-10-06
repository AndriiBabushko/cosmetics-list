import { ICosmetic } from './ICosmetic';
import { IError } from './IError';

export interface ICosmeticResponse {
  status: number;
  data: ICosmetic | IError;
}
