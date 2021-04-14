import { Component, OnInit } from '@angular/core';
import {CriteriaService} from '../../controller/service/criteria.service';
import {LocaleVo} from '../../controller/model/locale-vo.model';
import {Locale} from '../../controller/model/locale.model';

@Component({
  selector: 'app-locale-criteria',
  templateUrl: './locale-criteria.component.html',
  styleUrls: ['./locale-criteria.component.css']
})
export class LocaleCriteriaComponent implements OnInit {

  constructor(private criteriaService: CriteriaService) { }

  get localeVo(): LocaleVo {
    return this.criteriaService.localeVo;
  }
  get myLocalesList(): Array<Locale> {
    return this.criteriaService.myLocalesList;
  }
  public searchCriteria(localeVo: LocaleVo){
    return this.criteriaService.searchCriteria(localeVo);
  }
  get listeLocaleFound(): Array<Locale> {
    return this.criteriaService.listeLocaleFound;
  }
  ngOnInit(): void {
    this.criteriaService.findAllLocale();
  }

}
