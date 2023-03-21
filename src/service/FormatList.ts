import { injectable } from "inversify";

@injectable()
export default class FormatList {
  public formatList = (list: Array<any>): Array<any> => {
    return list.map((item: any) => {
      return {
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
      };
    });
  }
}
