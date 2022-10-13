import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

import { global } from '../global';
import { Role } from '../models/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  public url:string;

  constructor(
    public _http:HttpClient
  ) {
    this.url=global.url
   }

   getrolebycompany(token:string,role:Role):Observable<any>{
    let json=JSON.stringify(role);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.post(this.url+'role/getrolesbycompany',params,{headers:headers});
   }





}
