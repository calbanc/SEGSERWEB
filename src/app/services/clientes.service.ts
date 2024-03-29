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

  getall(token:string):Observable<any>{

    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.get(this.url+'clients',{headers:headers});
  }
  register(token:string,cliente:Clients):Observable<any>{
    let json=JSON.stringify(cliente);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.post(this.url+'clients/register',params,{headers:headers});
  }
  delete(token:string,cliente:Clients):Observable<any>{
    let json=JSON.stringify(cliente);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.post(this.url+'clients/delete',params,{headers:headers});
  }
  searchbycompany(token:string,cliente:Clients):Observable<any>{
    let json=JSON.stringify(cliente);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.post(this.url+'clients/searchbycompany',params,{headers:headers});
  }





}








