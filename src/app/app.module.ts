import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocalesComponent } from './locales/locales.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './locales/menu/menu.component';
import { PageNotFoundComponent } from './locales/page-not-found/page-not-found.component';

import {LocaleCreateComponent} from './locales/locale-create/locale-create.component';
import {LocaleListComponent} from './locales/locale-list/locale-list.component';
import {LocaleItemComponent} from './locales/locale-item/locale-item.component';
import {LocalesSearchComponent} from './locales/locales-search/locales-search.component';
import {TaxePaiementComponent} from './locales/taxe-paiement/taxe-paiement.component';
import {LocaleCriteriaComponent} from './locales/locale-criteria/locale-criteria.component';
import {SearchViaCityComponent} from './locales/search-via-city/search-via-city.component';
import { CreateListComponent } from './locales/create-list/create-list.component';
import { ItemSearchComponent } from './locales/item-search/item-search.component';
import {RouterModule, Routes} from '@angular/router';
import { PdfPaiementComponent } from './locales/pdf-paiement/pdf-paiement.component';

const appRoutes: Routes = [
  { path: '', component: CreateListComponent},
  { path: 'create-list', component: CreateListComponent},
  { path: 'item-search', component: ItemSearchComponent},
  { path: 'taxe-paiement', component: TaxePaiementComponent},
  { path: 'search-via-city', component: SearchViaCityComponent},
  { path: 'locale-criteria', component: LocaleCriteriaComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LocalesComponent,
    LocaleCreateComponent,
    LocaleListComponent,
    LocaleItemComponent,
    LocalesSearchComponent,
    TaxePaiementComponent,
    LocaleCriteriaComponent,
    SearchViaCityComponent,
    MenuComponent,
    PageNotFoundComponent,
    CreateListComponent,
    ItemSearchComponent,
    PdfPaiementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  //bootstrap: [LocalesComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
