import { Injectable } from '@angular/core';
import {Secteur} from '../model/secteur.model';
import {Locale} from '../model/locale.model';
import {Redevable} from '../model/redevable.model';
import {Categorielocale} from '../model/categorielocale.model';
import {HttpClient} from '@angular/common/http';
import {Ville} from '../model/ville.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecteurService {

  private _secteur: Secteur;
  private _locale : Locale;
  private _localesList: Array<Locale>;
  //private _listeLocaleTemporaire: Array<Locale>;
  private _secteurList: Array<Secteur>;
  private _redevableList: Array<Redevable>;
  private _categorieList: Array<Categorielocale>;
  private _villeList: Array<Ville>;
  private _sectorClicked: string;

  constructor(private http: HttpClient) { }

  public save() {
    this.http.post<number>(environment.baseUrlTaxeBoisson + '/secteur/', this.secteur).subscribe(
      data => {
        if (data > 0) {
          console.log('bravoo!!!');
          this.secteurList.push(this.cloneSecteur(this.secteur));
          this.secteur = null;
        }
      }, error => {
        console.log('Erreur!!!');
      }
    );
  }

  public add(){
    this.secteur.listeLocale.push(this.cloneLocale(this.locale));
    this.locale = null;
  }

  public deleteSector(indexSect: number, secteur: Secteur){
    this.http.delete(environment.baseUrlTaxeBoisson + '/secteur/code/' + secteur.code).subscribe(
      data => {
        console.log('Perfectooo');
        this.secteurList.splice(indexSect, 1);
        this.localesList = null;
      }, error => {
        console.log('Oooh!! NON');
      }
    );
  }

  public deleteLocale(indexLoc: number, locale: Locale){
    this.http.delete(environment.baseUrlTaxeBoisson + '/locale/reference/' + locale.ref).subscribe(
      data => {
        if (data > 0){
          console.log('Perfectooo');
          this.localesList.splice(indexLoc, 1);

        }else{
          alert('erreur lors de la suppression');
        }
      }, error => {
        console.log('Oooh!! NON');
      }
    );
  }

  public deleteItem(index: number){
    this.secteur.listeLocale.splice(index, 1);
  }
  public findAllSecteur(){
    this.http.get<Array<Secteur>>(environment.baseUrlTaxeBoisson + '/secteur/').subscribe(
       data => {
        this.secteurList = data;
      }, error => {
        console.log('Error');
      }
    );
  }
  public findAllVille(){
    this.http.get<Array<Ville>>(environment.baseUrlTaxeBoisson + '/ville/').subscribe(
       data => {
        this.villeList = data;
      }, error => {
        console.log('Error');
      }
    );
  }

  public findAllCategorie(){
    this.http.get<Array<Categorielocale>>(environment.baseUrlTaxeBoisson + '/categorielocale/').subscribe(
       data => {
        this.categorieList = data;
      }, error => {
        console.log('Error');
      }
    );
  }
  public searchLocales(sect: Secteur){
    this.http.get<Array<Locale>>(environment.baseUrlTaxeBoisson + '/locale/secteur/code/' + sect.code).subscribe(
      data => {
        this.localesList = data;
        this.sectorClicked = sect.code;
      }, error => {
        console.log('Erreuuuuuuuuur');
      }
    );
  }
  public validateSave(): boolean{
    return this.secteur.code != null && this.secteur.listeLocale.length > 0;
  }
  public validateAdd(): boolean{
    return this.secteur.code != null && this.locale.ref != null &&
      this.locale.redevable.ref != null && this.locale.categorielocale.ref != null;
  }

  private cloneLocale(locale: Locale){
    let myClone = new Locale();
    myClone.id = locale.id;
    myClone.ref = locale.ref;
    myClone.adresse = locale.adresse;
    myClone.rue = locale.rue;
    myClone.surface = locale.surface;
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
  private cloneVille(ville: Ville){
    let myVille = new Ville();
    myVille.id = ville.id;
    myVille.libelle = myVille.libelle;
    return myVille;
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
  get secteur(): Secteur {
    if (this._secteur == null){
      this._secteur = new Secteur();
    }
    return this._secteur;
  }

  set secteur(value: Secteur) {
    this._secteur = value;
  }

  get locale(): Locale {
    if (this._locale == null){
      this._locale = new Locale();
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
  get secteurList(): Array<Secteur> {
    if (this._secteurList == null){
      this._secteurList = new Array<Secteur>();
    }
    return this._secteurList;
  }
  set secteurList(value: Array<Secteur>) {
    this._secteurList = value;
  }

  get redevableList(): Array<Redevable> {
    if (this._redevableList == null){
      this._redevableList = new Array<Redevable>();
    }
    return this._redevableList;
  }

  get categorieList(): Array<Categorielocale> {
    if (this._categorieList == null){
      this._categorieList = new Array<Categorielocale>();
    }
    return this._categorieList;
  }

  get villeList(): Array<Ville> {
    if (this._villeList == null){
      this._villeList = new Array<Ville>();
    }
    return this._villeList;
  }

  set redevableList(value: Array<Redevable>) {
    this._redevableList = value;
  }

  set categorieList(value: Array<Categorielocale>) {
    this._categorieList = value;
  }

  set villeList(value: Array<Ville>) {
    this._villeList = value;
  }

  get sectorClicked(): string {
    return this._sectorClicked;
  }

  set sectorClicked(value: string) {
    this._sectorClicked = value;
  }
}
