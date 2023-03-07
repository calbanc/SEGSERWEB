import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { PuntoscontrolService } from 'src/app/services/puntoscontrol.service';
import { User } from 'src/app/models/User';
import { observable } from 'rxjs';
@Component({
  selector: 'app-generaronda',
  templateUrl: './generaronda.component.html',
  styleUrls: ['./generaronda.component.css']
})
export class GenerarondaComponent implements OnInit {
  //frmcrearronda:FormGroup;
  public token=this.userService.gettoken();
  public idcompany=this.userService.getcompany();
  public usuarios:User;
  public usu:any;

  constructor(
    private userService:UserService,
    private clientesService:ClientesService,
    private puntoscontrolService:PuntoscontrolService
  ) {
    this.usuarios=new User('','','','','','','','','');
  }

  ngOnInit(): void {
    this.cargarusuario();
  }
  cargarusuario(){
    this.usuarios.IDCOMPANYUSER=this.idcompany;
    this.usuarios.IDROLE='TODOS';
    this.userService.getuserbycompany(this.token||'',this.usuarios).subscribe(
      response=>{
        console.log(response);
      },error=>{
        console.log(error);
      }
    )

  }

  registrar(){

  }
}
