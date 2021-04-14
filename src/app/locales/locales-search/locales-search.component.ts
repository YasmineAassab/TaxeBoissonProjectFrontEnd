import { Component, OnInit } from '@angular/core';
import {SecteurService} from '../../controller/service/secteur.service';
import {Secteur} from '../../controller/model/secteur.model';
import {Locale} from '../../controller/model/locale.model';

@Component({
  selector: 'app-locales-search',
  templateUrl: './locales-search.component.html',
  styleUrls: ['./locales-search.component.css']
})
export class LocalesSearchComponent implements OnInit {

  constructor(private secteurService: SecteurService) { }

  get secteurList(): Array<Secteur> {
    return this.secteurService.secteurList;
  }
  get localesList(): Array<Locale> {
    return this.secteurService.localesList;
  }
  public searchLocales(secteur: Secteur){
    return this.secteurService.searchLocales(secteur);
  }
  public deleteSector(indexSect: number, secteur: Secteur){
    return this.secteurService.deleteSector(indexSect, secteur);
  }
  public deleteLocale(indexLoc: number, locale: Locale){
    return this.secteurService.deleteLocale(indexLoc, locale);
  }
  get sectorClicked(): string {
    return this.secteurService.sectorClicked;
  }
  ngOnInit(): void {
    this.secteurService.findAllSecteur();
  }

}
