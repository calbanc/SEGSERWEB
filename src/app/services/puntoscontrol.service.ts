import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from '../global';
import { Point } from '../models/Point';
@Injectable({
  providedIn: 'root'
})
export class PuntoscontrolService {
  public url:string;
  public punto:Point
  constructor(
    public _http:HttpClient
  ) {
    this.url=global.url,
    this.punto=new Point('','','','','','','','');
  }

  getall(token:string):Observable<any>{
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.get(this.url+'point',{headers:headers});
  }
  register(token:string,punto:Point):Observable<any>{
    let json=JSON.stringify(punto);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.post(this.url+'point/create',params,{headers:headers});
  }

  delete(token:string,punto:Point):Observable<any>{
    let json=JSON.stringify(punto);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.post(this.url+'point/delete',params,{headers:headers});
  }

}
