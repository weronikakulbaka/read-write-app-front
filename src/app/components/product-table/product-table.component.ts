import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  @Input() product: Product;
  displayedColumns: string[] = [
    'Producent', 
    'Matryca',
    'Rozdzielczosc',
    'TypMatrycy',
    'LiczbaRdzeniFizycznych',
    'Taktowanie',
    'RAM',
    'PojemnoscDysku',
    'TypDysku',
    'KartaGraficzna',
    'PamiecKartyGraficznej',
    'SystemOperacyjny',
    'NapedOptyczny',
  ];
  constructor() { }

  ngOnInit(): void {
  }

  send(form: NgForm):void{
    console.log(this.product);
  }

}
