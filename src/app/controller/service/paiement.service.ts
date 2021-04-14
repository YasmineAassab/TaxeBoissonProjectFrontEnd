import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Redevable} from '../model/redevable.model';
import {Locale} from '../model/locale.model';
import {Tautaxeboisson} from '../model/tautaxeboisson.model';
import {Categorielocale} from '../model/categorielocale.model';
import {TaxeBoisson} from '../model/taxe-boisson.model';
import {Ville} from '../model/ville.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  private _redevable: Redevable;
  private _locale: Locale;
  private _tauTaxeBoisson: Tautaxeboisson;
  private _taxeBoisson: TaxeBoisson;
  private _listeLocale: Array<Locale>;
  private _listeRedevable: Array<Redevable>;
  private _localeClicked: string;

  constructor(private http: HttpClient) { }


  public findAllRedevable(){
    this.http.get<Array<Redevable>>(environment.baseUrlTaxeBoisson + '/redevable/').subscribe(
      data => {
        this.listeRedevable = data;
      }, error => {
        console.log('Error');
      }
    );
  }

  public findLocales(){
    this.http.get<Array<Locale>>(environment.baseUrlTaxeBoisson + '/locale/redevable/reference/' + this.redevable.ref).subscribe(
      data => {
        this.listeLocale = data;
      }, error => {
        console.log('Erreuuraa');
      }
    );
  }
  public save(){
    console.log('lolo!!');
    this.taxeBoisson.redevable.ref = this.redevable.ref;
    console.log('hohoho!!');
    this.http.post(environment.baseUrlTaxeBoisson + '/taxeboisson/', this.taxeBoisson).subscribe(
      data => {
        if (data > 0){
          console.log('Bravoooo');
        }
      }, error => {
        console.log('Erreeue!!');
      }
    );
    this.taxeBoisson = null;
    this.redevable = null;
    this.listeLocale = null;
  }

  public findTaux(locale: Locale){
    this.http.get<Tautaxeboisson>(environment.baseUrlTaxeBoisson + '/tautaxeboisson/categorieLocale/ref/' + locale.categorielocale.ref).subscribe(
      data => {
        this.tauTaxeBoisson = data;
        this.taxeBoisson.locale.ref = locale.ref;
        this.localeClicked = locale.ref;
      }, error => {
        console.log('Errr');
      }
    );
  }
  public calculMontant() {
    this.taxeBoisson.montantBase = this.taxeBoisson.chiffreAffaire * (this.tauTaxeBoisson.pourcentage / 100);
  }

  get redevable(): Redevable {
    if (this._redevable == null){
      this._redevable = new Redevable();
    }
    return this._redevable;
  }
  set redevable(value: Redevable) {
    this._redevable = value;
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

  get taxeBoisson(): TaxeBoisson {
    if (this._taxeBoisson == null){
      this._taxeBoisson = new TaxeBoisson();
    }
    return this._taxeBoisson;
  }

  set taxeBoisson(value: TaxeBoisson) {
    this._taxeBoisson = value;
  }

  get tauTaxeBoisson(): Tautaxeboisson {
    if (this._tauTaxeBoisson == null){
      this._tauTaxeBoisson = new Tautaxeboisson();
    }
    return this._tauTaxeBoisson;
  }

  set tauTaxeBoisson(value: Tautaxeboisson) {
    this._tauTaxeBoisson = value;
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
  get listeRedevable(): Array<Redevable> {
    if (this._listeRedevable == null){
      this._listeRedevable = new Array<Redevable>();
    }
    return this._listeRedevable;
  }
  set listeRedevable(value: Array<Redevable>) {
    this._listeRedevable = value;
  }

  get localeClicked(): string {
    return this._localeClicked;
  }

  set localeClicked(value: string) {
    this._localeClicked = value;
  }
}
