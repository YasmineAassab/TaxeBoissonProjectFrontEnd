import { Component, OnInit } from '@angular/core';
import {LocaleService} from '../../controller/service/locale.service';
import {Locale} from '../../controller/model/locale.model';
import {Secteur} from '../../controller/model/secteur.model';

@Component({
  selector: 'app-locale-list',
  templateUrl: './locale-list.component.html',
  styleUrls: ['./locale-list.component.css']
})
export class LocaleListComponent implements OnInit {

  get localesList(): Array<Locale>{
    return this.localeService.localesList;
  }
  public deleteSector(secteur: Secteur){
    return this.deleteSector(secteur);
  }

  constructor(private localeService: LocaleService) { } // Like autowired

  ngOnInit(): void {
       this.localeService.findAll();
  }


  delete(index: number, locale: Locale) {
    this.localeService.delete(index, locale);
  }

  update(index: number, loc: Locale) {
    this.localeService.update(index, loc);
  }
}
