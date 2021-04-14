import { Component, OnInit } from '@angular/core';
import {SecteurService} from '../../controller/service/secteur.service';
import {Secteur} from '../../controller/model/secteur.model';
import {Locale} from '../../controller/model/locale.model';
import {Ville} from '../../controller/model/ville.model';
import {Redevable} from '../../controller/model/redevable.model';
import {Categorielocale} from '../../controller/model/categorielocale.model';

@Component({
  selector: 'app-locale-item',
  templateUrl: './locale-item.component.html',
  styleUrls: ['./locale-item.component.css']
})
export class LocaleItemComponent implements OnInit {

  constructor(private secteurService: SecteurService) { }

  public add(){
    return this.secteurService.add();
  }
  public save(){
    return this.secteurService.save();
  }
  get secteur(): Secteur{
    return this.secteurService.secteur;
  }
  get locale(): Locale{
    return this.secteurService.locale;
  }
  public deleteItem(index: number){
    return this.secteurService.deleteItem(index);
  }

  public validateSave(): boolean{
    return this.secteurService.validateSave();
  }
  public validateAdd(): boolean{
    return this.secteurService.validateAdd();
  }
  get villeList(): Array<Ville> {
    return this.secteurService.villeList;
  }
  get redevableList(): Array<Redevable> {
    return this.secteurService.redevableList;
  }
  get categorieList(): Array<Categorielocale> {
    return this.secteurService.categorieList;
  }
  ngOnInit(): void {
    this.secteurService.findAllVille();
    this.secteurService.findAllCategorie();
  }

}
