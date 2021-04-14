import {Secteur} from './secteur.model';
import {Redevable} from './redevable.model';
import {Categorielocale} from './categorielocale.model';


export class Locale {
  public id: number;
  public ref: string;
  public adresse: string;
  public rue: string;
  public surface: number;
  public secteur = new Secteur();
  public redevable = new Redevable();
  public categorielocale = new Categorielocale();
}
