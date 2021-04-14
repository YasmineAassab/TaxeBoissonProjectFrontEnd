import { Injectable } from '@angular/core';
import {Locale} from '../model/locale.model';
import {HttpClient} from '@angular/common/http';
import {Secteur} from '../model/secteur.model';
import {Categorielocale} from '../model/categorielocale.model';
import {Redevable} from '../model/redevable.model';
import {Ville} from '../model/ville.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private _locale: Locale;
  private _localesList: Array<Locale> ;
  private _index: number;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  /*public save() {
    if (this.locale.id == null) {
      this.http.post<number>(this.urlBase + this.url + '/', this.locale).subscribe(
        data => {
          if (data > 0) {
            this.locale.id = this.localesList.length + 1;
            this.localesList.push(this.cloneLocale(this.locale));
          }
        },
        error => {
          console.log('Error !!');
        }
      );
    } else {
      this.localesList[this._index] = this.cloneLocale(this.locale);
    }
    this.locale = null;
  }*/

  public save() {
    if (this.localesList.indexOf(this.locale) == (1-1)) {
      this.http.post<number>(environment.baseUrlTaxeBoisson + '/locale/', this.locale).subscribe(
        data => {
          console.log('hy !!');
          if (data > 0) {
            this.localesList.push(this.cloneLocale(this.locale));
            this.locale = null;
          }
        },
        error => {
          console.log('Error !!');
        }
      );
    } else {
      console.log('nun');
      this.http.put<number>(environment.baseUrlTaxeBoisson + '/locale/', this.locale).subscribe(
        data => {
          console.log('mimi');
          this.localesList[this._index] = this.cloneLocale(this.locale);
          this.locale = null;
        }, error => {
          console.log('Error');
        }
      );
    }
  }

  // tslint:disable-next-line:typedef
  public findAll(){
    this.http.get<Array<Locale>>(environment.baseUrlTaxeBoisson + '/locale/').subscribe(
      data => {
        this.localesList = data;
      }, error => {
        console.log('Error');
      }
    );
  }

   public delete(index: number, locale: Locale){
    this.localesList.splice(index, 1);
    this.http.delete(environment.baseUrlTaxeBoisson + '/locale/reference/' + locale.ref).subscribe(
      data => {
        if (data > 0){
          console.log('Bravooo');
        }
      },error=>{
        console.log('Erreur');
     }
    );
   }

  public update(index: number, loc: Locale){
        this.locale = this.cloneLocale(loc);
        this._index = index;
  }
  get locale(): Locale {
    if (this._locale == null){
      this._locale = new Locale();
      this._locale.secteur = new Secteur();
      this._locale.redevable = new Redevable();
      this._locale.categorielocale = new Categorielocale();
    }
    return this._locale;
  }

  set locale(value: Locale) {
    this._locale = value;
  }

  get localesList(): Array<Locale> {
    if (this._localesList == null){
      this._localesList = new Array<Locale>();
    }
    return this._localesList;
  }

  set localesList(value: Array<Locale>) {
    this._localesList = value;
  }

  // tslint:disable-next-line:typedef
  private cloneLocale(locale: Locale){
    let myClone = new Locale();
    myClone.id = locale.id;
    myClone.ref = locale.ref;
    myClone.adresse = locale.adresse;
    myClone.rue = locale.rue;
    myClone.surface = locale.surface;
    myClone.secteur = this.cloneSecteur(locale.secteur);
    myClone.redevable = this.cloneRedevable(locale.redevable);
    myClone.categorielocale = this.cloneCategorie(locale.categorielocale);
    return myClone;
  }
  private cloneSecteur(secteur: Secteur){
    let mySecteur = new Secteur();
    mySecteur.id = secteur.id;
    mySecteur.libelle = secteur.libelle;
    mySecteur.code = secteur.code;
    mySecteur.ville = this.cloneVille(secteur.ville);
    return mySecteur;
  }

  private cloneRedevable(redevable: Redevable){
    let myRedevable = new Redevable();
    myRedevable.id = redevable.id;
    myRedevable.ref = redevable.ref;
    return myRedevable;
  }

  private cloneCategorie(categorie: Categorielocale){
    let myCategorie = new Categorielocale();
    myCategorie.id = categorie.id;
    myCategorie.ref = categorie.ref;
    myCategorie.description = categorie.description;
    return myCategorie;
  }
  private cloneVille(ville: Ville){
   let myVille = new Ville();
   myVille.id = ville.id;
   myVille.libelle = myVille.libelle;
   return myVille;
 }
}
