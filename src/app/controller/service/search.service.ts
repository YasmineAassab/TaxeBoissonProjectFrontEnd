import { Injectable } from '@angular/core';
import {Ville} from '../model/ville.model';
import {HttpClient} from '@angular/common/http';
import {Secteur} from '../model/secteur.model';
import {Locale} from '../model/locale.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _listeVille: Array<Ville>;
  private _listeSecteur: Array<Secteur>;
  private _listeLocale: Array<Locale>;
  private _villeClicked: string;
  private _secteurClicked: string;

  public deleteSector(indexSect: number, secteur: Secteur){
    this.http.delete(environment.baseUrlTaxeBoisson + '/secteur/code/' + secteur.code).subscribe(
      data => {
        console.log('Perfectooo');
        this.listeSecteur.splice(indexSect, 1);
        this.listeLocale = null;
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
          this.listeLocale.splice(indexLoc, 1);

        }else{
          alert('erreur lors de la suppression');
        }
      }, error => {
        console.log('Oooh!! NON');
      }
    );
  }


  constructor(private http: HttpClient) { }

  public findVille(){
    this.http.get<Array<Ville>>(environment.baseUrlTaxeBoisson + '/ville/').subscribe(
      data => {
        console.log('Buenooo');
        this.listeVille = data;
      }, error => {
        console.log('Eruura');
      }
    );
  }
  public findSecteur(ville: Ville){
    this.http.get<Array<Secteur>>(environment.baseUrlTaxeBoisson + '/secteur/ville/libelle/' + ville.libelle).subscribe(
      data => {
        console.log('ouiiiiiiiii');
        this.listeSecteur = data;
        this.villeClicked = ville.libelle;
    }, error => {
        console.log('Noooo');
      }
    );
    this.listeLocale = null;
  }
  public findLocale(secteur: Secteur){
    this.http.get<Array<Locale>>(environment.baseUrlTaxeBoisson + '/locale/secteur/code/' + secteur.code).subscribe(
      data => {
        console.log('Bravooo');
        this.listeLocale = data;
        this.secteurClicked = secteur.code;
      }, error => {
        console.log('Noooo ! :/');
      }
    );
  }

  get listeVille(): Array<Ville> {
    if (this._listeVille == null){
      this._listeVille = new Array<Ville>();
    }
    return this._listeVille;
  }

  set listeVille(value: Array<Ville>) {
    this._listeVille = value;
  }

  get listeSecteur(): Array<Secteur> {
    if (this._listeSecteur == null){
      this._listeSecteur = new Array<Secteur>();
    }
    return this._listeSecteur;
  }

  set listeSecteur(value: Array<Secteur>) {
    this._listeSecteur = value;
  }

  get listeLocale(): Array<Locale> {
    if (this._listeLocale == null){
      this._listeLocale = new Array<Locale>();
    }
    return this._listeLocale;
  }

  set listeLocale(value: Array<Locale>) {
    this._listeLocale = value;
  }

  get villeClicked(): string {
    return this._villeClicked;
  }

  set villeClicked(value: string) {
    this._villeClicked = value;
  }

  get secteurClicked(): string {
    return this._secteurClicked;
  }

  set secteurClicked(value: string) {
    this._secteurClicked = value;
  }
}
