import { AxiosResponse } from 'axios';
import { axiosInstance } from '../lib/axios';
import { ICosmeticsResponse } from '../models/ICosmeticsResponse';
import { ICosmeticResponse } from '../models/ICosmeticResponse';

export default class CosmeticsService {
  static async fetchCosmetics(): Promise<AxiosResponse<ICosmeticsResponse>> {
    return await axiosInstance.get<ICosmeticsResponse>('/cosmetics/br');
  }

  static async fetchCosmetic(cosmeticID: string | undefined): Promise<AxiosResponse<ICosmeticResponse>> {
    return await axiosInstance.get<ICosmeticResponse>(`/cosmetics/br/${cosmeticID}`);
  }

  static async fetchCosmeticByName(cosmeticName: string | undefined): Promise<AxiosResponse<ICosmeticsResponse>> {
    return await axiosInstance.get<ICosmeticsResponse>(
      `/cosmetics/br/search/all?matchMethod=contains&name=${cosmeticName}`,
    );
  }
}
