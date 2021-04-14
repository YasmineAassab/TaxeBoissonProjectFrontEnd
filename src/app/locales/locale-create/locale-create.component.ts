import { Component, OnInit } from '@angular/core';
import {LocaleService} from '../../controller/service/locale.service';
import {Locale} from '../../controller/model/locale.model';

@Component({
  selector: 'app-locale-create',
  templateUrl: './locale-create.component.html',
  styleUrls: ['./locale-create.component.css']
})
export class LocaleCreateComponent implements OnInit {

  constructor(private localeService: LocaleService) { }

  ngOnInit(): void {
  }

  get locale(): Locale {
    return this.localeService.locale;
  }

  // tslint:disable-next-line:typedef
  public save() {
    this.localeService.save();
  }
}
