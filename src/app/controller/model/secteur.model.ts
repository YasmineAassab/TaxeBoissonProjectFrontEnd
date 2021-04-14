import {Locale} from './locale.model';
import {Ville} from './ville.model';

export class Secteur {
  public id: number;
  public code: string;
  public libelle: string;
  public ville = new Ville();
  public listeLocale = new Array<Locale>();
}
