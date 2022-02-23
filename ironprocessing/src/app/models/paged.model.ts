export class PagedModel<T>{
  public total: number;
  public offset: number;
  public limit: number;
  public items: T[];
}
