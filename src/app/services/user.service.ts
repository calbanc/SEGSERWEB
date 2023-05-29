import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

import { global } from '../global';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url:string;

  constructor(
    public _http:HttpClient
  ) {
    this.url=global.url
   }

   login(user: any):Observable<any>{
    
  /* 
    let params=new HttpParams();
    params=params.append('USERNAME',username)
    params=params.append('PASSWORD',password) */

    let json=JSON.stringify(user);
    let params="json="+json;

    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'login',params,{headers:headers});
   }
   getuser(user:any,token:string):Observable<any>{
    
    let json=JSON.stringify(user);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                  .set('Auth',token);
    return this._http.post(this.url+'user/getuser',params,{headers:headers});
   }

   gettoken(){
    return localStorage.getItem('TOKEN');
   }
   getcompany(){
    return localStorage.getItem('IDCOMPANY');
   }

   getuserbycompany(token:string,user:any):Observable<any>{
    let json=JSON.stringify(user);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.post(this.url+'user/getuserbycompany',params,{headers:headers});
   }
   delete(token:string,user:any):Observable<any>{
    let json=JSON.stringify(user);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.post(this.url+'user/delete',params,{headers:headers});
   }
   register(token:string,user:any):Observable<any>{
    let json=JSON.stringify(user);
    let params="json="+json;
    let headers=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                 .set('Auth',token);
    return this._http.post(this.url+'user/register',params,{headers:headers});
   }
}
