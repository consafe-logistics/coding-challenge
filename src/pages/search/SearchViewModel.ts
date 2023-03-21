import { inject, injectable } from 'inversify';
import { action, makeObservable, observable } from 'mobx';
import ApiService from '../../service/ApiService';

export type SearchType = {
  searchValue: string;
  searchResults: Array<any>;
  search: (value: string) => void;
}

/**
 * View model used for {@link Search} component.
 */
@injectable()
export default class SearchViewModel implements SearchType {
  public searchValue!: string;
  public searchResults = [{}];
  private apiService: any;

  constructor(
    @inject('FORMAT_LIST_SERVICE') private formatListService: any,
  ) {
    this.apiService = new ApiService();

    makeObservable(this, {
      searchValue: observable,
      search: action,
    });
  }

  public search = async (value: any) => {
    this.searchValue = value;
    const response = await this.apiService.get(this.searchValue);
    response.data = this.formatListService.formatList(response.data);

    return response;
  };
}
