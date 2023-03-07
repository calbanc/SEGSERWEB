import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

import { global } from '../global';
import { Zone } from '../models/Zone';
@Injectable({
  providedIn: 'root'
})
export class ZonasService {

  public url:string;

  constructor(
    public _http:HttpClient
  ) {
    this.url=global.url
  }
  getallzones(token:string):Observable<any>{
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.get(this.url+'zone',{headers:headers});
  }
  register(token:string,zonas:Zone):Observable<any>{
    let json=JSON.stringify(zonas);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.post(this.url+'zone/register',params,{headers:headers});
  }
  delete(token:string,zonas:Zone):Observable<any>{
    let json=JSON.stringify(zonas);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.post(this.url+'zone/delete',params,{headers:headers});
   }
   getzonasbyclient(token:string,zonas:Zone):Observable<any>{
    let json=JSON.stringify(zonas);
    let params="json="+json;              
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.post(this.url+'zone/getzonebyclient',params,{headers:headers});
   }




}
