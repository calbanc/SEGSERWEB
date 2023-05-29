import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router,ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:User;
  formulario:FormGroup
  public token:string='';
  loading:boolean=false;
  constructor(
    private fb:FormBuilder,
    private userservice:UserService,
    private snackbar:MatSnackBar,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.usuario=new User('','','','','','','','','','');
    this.formulario=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(){
    this.loading=true;
    this.usuario.USERNAME=this.formulario.value.username;
    this.usuario.PASSWORD=this.formulario.value.password;


    this.userservice.login(this.usuario).subscribe(
      response=>{
        let respuesta=response.token;
        if(response.status=='ok'){
          this.token=response.token
          localStorage.setItem('TOKEN',this.token);
          this.userservice.getuser(this.usuario,this.token).subscribe(
            response=>{
              this.loading=false;
              let data=response.data;
              let company=data[0].company.ID;
              let role=data[0].role.NAME;
              localStorage.setItem('ROLE',role);
              localStorage.setItem('IDCOMPANY',company);
              localStorage.setItem('LOGIN','YES');

              if(role=="SUPERVISOR"){
                this._router.navigate(['supervisor']);

              }

            },error=>{

            }
          );

        }else{
          this.snackbar.open('Usuario o clave incorrecta','',{
            duration:5000,
            horizontalPosition:'center',
            verticalPosition:'bottom'
          })

        }
      },error=>{

      }
    )

  }
}

