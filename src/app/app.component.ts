import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public login:boolean=false;

  constructor(
    private _router:Router,
    ){

  }

  ngDoCheck(){

    this.loaduser();


  }

  ngOnInit(): void {
    
      if(localStorage.getItem('ROLE')=="SUPERVISOR"){

        this._router.navigate(['supervisor']);
      }else{
        this._router.navigate(['login']);
      }
  }

  loaduser(){


    if(localStorage.getItem('LOGIN')=='YES'){
      this.login=true;
    }


  }

}


