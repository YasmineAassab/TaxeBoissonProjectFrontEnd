import {Redevable} from './redevable.model';
import {Locale} from './locale.model';

export class TaxeBoisson {
  public id: number;
  public ref: string;
  public annee: number;
  public trim: number;
  public chiffreAffaire: number;
  public pourcentageApplique: number;
  public montantBase: number;
  public redevable = new Redevable();
  public locale = new Locale();
}
