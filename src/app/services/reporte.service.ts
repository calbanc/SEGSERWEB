import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

import { global } from '../global';
import { Guards } from '../models/Guards';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  public url:string;
  public guarda:Guards;
  constructor(
    public _http:HttpClient
  ) {
    this.url=global.url
    this.guarda=new Guards(0,0,0,'',0,0,0,0,'','','','','');
  }

  serchbycompanyclient(token:string,guarda:Guards):Observable<any>{
    let json=JSON.stringify(guarda);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.post(this.url+'guards/serchbycompanyclient',params,{headers:headers});

  }


}
