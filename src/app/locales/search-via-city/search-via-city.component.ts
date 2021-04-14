import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../controller/service/search.service';
import {Ville} from '../../controller/model/ville.model';
import {Secteur} from '../../controller/model/secteur.model';
import {Locale} from '../../controller/model/locale.model';

@Component({
  selector: 'app-search-via-city',
  templateUrl: './search-via-city.component.html',
  styleUrls: ['./search-via-city.component.css']
})
export class SearchViaCityComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  get listeVille(): Array<Ville> {
    return this.searchService.listeVille;
  }
  get listeSecteur(): Array<Secteur> {
    return this.searchService.listeSecteur;
  }
  public findSecteur(ville: Ville){
    return this.searchService.findSecteur(ville);
  }
  get listeLocale(): Array<Locale> {
    return this.searchService.listeLocale;
  }
  public findLocale(secteur: Secteur){
    return this.searchService.findLocale(secteur);
  }
  public deleteSector(indexSect: number, secteur: Secteur){
    return this.searchService.deleteSector(indexSect, secteur);
  }
  public deleteLocale(indexLoc: number, locale: Locale){
    return this.searchService.deleteLocale(indexLoc, locale);
  }
  get villeClicked(): string {
    return this.searchService.villeClicked;
  }
  get secteurClicked(): string {
    return this.searchService.secteurClicked;
  }
  ngOnInit(): void {
    this.searchService.findVille();
  }

}
