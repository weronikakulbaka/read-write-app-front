import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './models/Product';
import { FileService } from './services/file.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'read-write-app';
  importedData$: Observable<Product[]>;

  constructor( private fileService: FileService ){}

  ngOnInit(): void {
   
  }

  readTXTData(): void {
    this.importedData$ = this.fileService.importTXTData();
  }

  readXMLData(): void {
    this.importedData$ = this.fileService.importXMLData();
  }
  
}
