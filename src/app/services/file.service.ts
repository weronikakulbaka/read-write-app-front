import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Laptop, Laptops, Product, ProductXML } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private endpoint: string = 'http://localhost:62188/api';

  constructor(private http: HttpClient) { }

  importTXTData(): Observable<Product[]> {
    return this.http.post<Product[]>(`${this.endpoint}/upload/2`, null);
  }

 
  importXMLData(): Observable<Product[]> {
    let elements: Product[] = new Array<Product>();
    return this.http.post<Product[]>(`${this.endpoint}/upload/1`, null)
    // .pipe(
    //   map((response: Laptops ) => this.parseXMLDataToProduct(elements, response))
    // );
  }

  saveTXTData(newdata: Product[]): Observable<Product[]>{
    const sendData = (newdata == null ? {} : newdata);
    return this.http.post<Product[]>(`${this.endpoint}/upload/2`, sendData);
  }

  saveXMLData(newdata: Product[]): Observable<any>{
    let elements: Product[] = new Array<Product>();
    //console.log(this.parseProductToXMLData(newdata))
    return this.http.post<Product[]>(`${this.endpoint}/upload/1`, newdata);
  }

  parseXMLDataToProduct(elements: Product[], response: Laptops): Product[] {
    console.log(response.laptops.laptop[0].manufacturer)
    response.laptops.laptop.forEach((laptop: ProductXML) => {
      let element: Product  = new Object();
      element.Producent = laptop.manufacturer;
      element.Matryca = laptop.screen.size;
      element.Rozdzielczosc = laptop.screen.resolution;
      element.TypMatrycy = laptop.screen.type;
      element.DotykowyEkran = laptop.screen['@touch'];
      element.CPU = laptop.processor.name;
      element.IloscRdzeni = laptop.processor.physical_cores;
      element.MHZ = laptop.processor.clock_speed;
      element.RAM = laptop.ram;
      element.PojemnoscDysku = laptop.disc.storage;
      element.RodzajDysku = laptop.disc['@type'];
      element.GPU = laptop.graphic_card.name;
      element.VRAM = laptop.graphic_card.memory;
      element.SystemOperacyjny = laptop.os;
      element.Naped = laptop.disc_reader;
      elements.push(element);
    })
    return elements;
  }

  parseProductToXMLData(data: Product[]): Laptops {
    let elements: ProductXML[] = new Array<ProductXML>();
    data.forEach((element: Product) => {
      let laptop: ProductXML = { manufacturer: null, screen: {['@touch']: null, size: null, resolution: null, type: null}, processor: {name: null, physical_cores: null, clock_speed: null}, ram: null, disc: {['@type']: null, storage: null}, graphic_card: {name: null, memory: null}, os: null, disc_reader: null };
      laptop.manufacturer = element.Producent;
      laptop.screen.size = element.Matryca;
      laptop.screen.resolution = element.Rozdzielczosc;
      laptop.screen.type = element.TypMatrycy;
      laptop.screen['@touch'] =  element.DotykowyEkran;
      laptop.processor.name = element.CPU;
      laptop.processor.physical_cores = element.IloscRdzeni;
      laptop.processor.clock_speed = element.MHZ;
      laptop.ram = element.RAM;
      laptop.disc.storage = element.PojemnoscDysku;
      laptop.disc['@type'] = element.RodzajDysku;
      laptop.graphic_card.name = element.GPU;
      laptop.graphic_card.memory = element.VRAM;
      laptop.os = element.SystemOperacyjny;
      laptop.disc_reader = element.Naped;
      elements.push(laptop);
    })
    let XMLData: Laptops = {laptops: {laptop: null}};
    XMLData.laptops.laptop = elements;
    console.log(XMLData);
    return XMLData;
  }


}
