import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LocaleCreateComponent} from './locales/locale-create/locale-create.component';
import {LocaleListComponent} from './locales/locale-list/locale-list.component';
import {LocalesSearchComponent} from './locales/locales-search/locales-search.component';
import {LocaleItemComponent} from './locales/locale-item/locale-item.component';
import {TaxePaiementComponent} from './locales/taxe-paiement/taxe-paiement.component';
import {SearchViaCityComponent} from './locales/search-via-city/search-via-city.component';
import {LocaleCriteriaComponent} from './locales/locale-criteria/locale-criteria.component';
import {PageNotFoundComponent} from './locales/page-not-found/page-not-found.component';
import {CreateListComponent} from './locales/create-list/create-list.component';
import {ItemSearchComponent} from './locales/item-search/item-search.component';

/*export const components = [CreateListComponent, ItemSearchComponent, TaxePaiementComponent, SearchViaCityComponent,
    LocaleCriteriaComponent]*/
const routes: Routes = [
  { path: '', component: CreateListComponent},
  { path: 'create-list', component: CreateListComponent},
  { path: 'item-search', component: ItemSearchComponent},
  { path: 'taxe-paiement', component: TaxePaiementComponent},
  { path: 'search-via-city', component: SearchViaCityComponent},
  { path: 'locale-criteria', component: LocaleCriteriaComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
