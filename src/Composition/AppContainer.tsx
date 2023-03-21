import { Container } from "inversify";
import SearchViewModel from "../pages/search/SearchViewModel";
import ApiService from "../service/ApiService";
import FormatList from "../service/FormatList";

let container = new Container();

container.bind('API_SERVICE').to(ApiService).inSingletonScope();
container.bind('FORMAT_LIST_SERVICE').to(FormatList).inSingletonScope();
container.bind('SEARCH_PAGE').to(SearchViewModel);

export const appContainer: Container = container;
