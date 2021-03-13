import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileService } from './services/file.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'read-write-app';
  importedData$: Observable<string>;

  constructor( private fileService: FileService ){}

  ngOnInit(){
    this.importedData$ = this.fileService.importData();
  }
  
}
