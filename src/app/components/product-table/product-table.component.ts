import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  @Input() product: Product[];
  displayedColumns: string[] = [
    'Producent', 
    'Matryca',
    'Rozdzielczosc',
    'TypMatrycy',
    'DotykowyEkran',
    'CPU',
    'IloscRdzeni',
    'MHZ',
    'RAM',
    'PojemnoscDysku',
    'RodzajDysku',
    'GPU',
    'VRAM',
    'SystemOperacyjny',
    'NapedOptyczny',
  ];
  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  send():void{
    this.fileService.importData(this.product).subscribe();
  }

}
