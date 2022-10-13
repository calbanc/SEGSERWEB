import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

import { global } from '../global';
import { Clients } from '../models/Clients';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  public url:string;
  constructor(
    public _http:HttpClient
  ) {
    this.url=global.url
  }

  


}








