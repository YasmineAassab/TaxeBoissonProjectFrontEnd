import {Categorielocale} from './categorielocale.model';

export class Tautaxeboisson {
  public id: number;
  public ref: string;
  public pourcentage: number;
  public categorielocale = new Categorielocale();
}
