import { injectable } from "inversify";
import mockData from "./mockData.json";

export interface ApiResponseType {
  /**
   * Data returned in the response.
   */
  data: any;
  /**
   * The responses status code (if applicable).
   */
  status: number;
}

export interface ApiServiceType {
  get: () => Promise<ApiResponseType>;
}

@injectable()
export default class ApiService implements ApiServiceType {
  private static instance: ApiService;
  
  static get initialized(): ApiService {
    if (!ApiService.instance) {
      this.instance = new ApiService();
    }
    return this.instance;
  }

  public get = async (): Promise<ApiResponseType> => {
    return mockData;
  }

  public filtered = async (value: string, param: string): Promise<ApiResponseType> => {
    const response = await this.get();
    const filteredData = response.data.filter((item: any) => {
      return item[param].toLowerCase().includes(value.toLowerCase());
    });
    return {
      data: filteredData,
      status: response.status,
    };
  }
}
