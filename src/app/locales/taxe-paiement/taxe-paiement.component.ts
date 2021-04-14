import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {PaiementService} from '../../controller/service/paiement.service';
import {Redevable} from '../../controller/model/redevable.model';
import {Locale} from '../../controller/model/locale.model';
import {Categorielocale} from '../../controller/model/categorielocale.model';
import {Tautaxeboisson} from '../../controller/model/tautaxeboisson.model';
import {TaxeBoisson} from '../../controller/model/taxe-boisson.model';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-taxe-paiement',
  templateUrl: './taxe-paiement.component.html',
  styleUrls: ['./taxe-paiement.component.css']
})
export class TaxePaiementComponent implements OnInit {

  @ViewChild('html', {static: false}) el!: ElementRef;


  /*download(){
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=> {
        pdf.save("angular.pdf");
      }
    });
  }
*/

  public download() {
    var data = document.getElementById('taxe');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;

      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 75;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('PAIEMENT.pdf'); // Generated PDF
    });
  }

constructor(private paiementService: PaiementService) { }



  get redevable(): Redevable {
    return this.paiementService.redevable;
  }
  get locale(): Locale {
    return this.paiementService.locale;
  }
  get taxeBoisson(): TaxeBoisson {
    return this.paiementService.taxeBoisson;
  }
  get tauTaxeBoisson(): Tautaxeboisson {
    return this.paiementService.tauTaxeBoisson;
  }
  get listeLocale(): Array<Locale> {
    return this.paiementService.listeLocale;
  }
  public findTaux(locale: Locale){
    return this.paiementService.findTaux(locale);
  }
  public findLocales(){
    return this.paiementService.findLocales();
  }
  public calculMontant() {
    return this.paiementService.calculMontant();
  }
  public save(){
    return this.paiementService.save();
  }
  get listeRedevable(): Array<Redevable> {
    return this.paiementService.listeRedevable;
  }
  get localeClicked(): string {
    return this.paiementService.localeClicked;
  }

/*  download(){
    var yaya = document.getElementById('html')

    html2canvas(yaya).then((canvas) => {
      console.log(canvas)
      var imgData = canvas.toDataURL('image/png')

      var doc = new jsPDF()

      //var imgHeight = canvas.height * 200 / canvas.width;
      doc.addImage(imgData, 'png', 5, 5,200, 600)

      doc.save("image.pdf")
      })
  }

*/


  /*public download():void {
    let DATA = document.getElementById('html');

    html2canvas(DATA).then(canvas => {

      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('angular-demo.pdf');
    });
  }
*/


ngOnInit(): void {
    this.paiementService.findAllRedevable();
  }h

}
