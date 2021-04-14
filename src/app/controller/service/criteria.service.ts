import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Locale} from '../model/locale.model';
import {LocaleVo} from '../model/locale-vo.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CriteriaService {

  private _localeVo: LocaleVo;
  private _myLocalesList: Array<Locale>;
  private _listeLocaleFound: Array<Locale>;

  constructor(private http: HttpClient) { }

  public findAllLocale(){
    this.http.get<Array<Locale>>(environment.baseUrlTaxeBoisson + '/locale/').subscribe(
      data => {
        console.log(' :* ');
        this.myLocalesList = data;
      }, error => {
        console.log('NaNNN');
      }
    );
  }
  public searchCriteria(localeVo: LocaleVo){
      this.http.post<Array<Locale>>(environment.baseUrlTaxeBoisson + '/locale/criteria', localeVo).subscribe(
        data => {
          console.log('Wooow !!');
          this.listeLocaleFound = data;
        }, error => {
          console.log('ooh noo');
        }
      );
  }

  get localeVo(): LocaleVo {
    if (this._localeVo == null){
      this._localeVo = new LocaleVo();
    }
    return this._localeVo;
  }

  get myLocalesList(): Array<Locale> {
    if (this._myLocalesList == null){
      this._myLocalesList = new Array<Locale>();
    }
    return this._myLocalesList;
  }
  set localeVo(value: LocaleVo) {
    this._localeVo = value;
  }
  set myLocalesList(value: Array<Locale>) {
    this._myLocalesList = value;
  }

  get listeLocaleFound(): Array<Locale> {
    if (this._listeLocaleFound ==null){
      this._listeLocaleFound = new Array<Locale>();
    }
    return this._listeLocaleFound;
  }

  set listeLocaleFound(value: Array<Locale>) {
    this._listeLocaleFound = value;
  }
}
