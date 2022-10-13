import { Component, OnInit,Inject } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/models/Role';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public role:Role;
  public idcompany:number=0;
  public token=this.userService.gettoken();
  public rol:any;
  public user:User;
  public isloading:boolean=true;
  formulario:FormGroup;
  frmcreauser:FormGroup;
  ELEMENT_DATA:User[]=[];
  displayedColumns: string[] = ['ID', 'USERNAME','EMAIL', 'NOMBRE','APELLIDOPATERNO', 'APELLIDOMATERNO','ACCIONES'];
  dataSource !:MatTableDataSource<any>;
  constructor(
    public roleService:RoleService,
    public userService:UserService,
    private fb:FormBuilder,
    public dialog:MatDialog
  ) {
    this.ELEMENT_DATA
    this.role=new Role('','','');
    this.user=new User('','','','','','','','','TODOS');
    this.token=this.userService.gettoken();
    this.formulario=this.fb.group({
      IDROLE:['',Validators.required]

    });
    this.frmcreauser=this.fb.group({
      USERNAME:['',Validators.required],
      PASSWORD:['',Validators.required],
      EMAIL:['',[Validators.required, Validators.email]],
      NAME:['',Validators.required],
      APELLIDOPATERNO:['',Validators.required],
      APELLIDOMATERNO:['',Validators.required],
      IDROLE:['',Validators.required]
    });
  }

  ngOnInit(): void {

    this.role.IDCOMPANY=this.userService.getcompany();
    this.getrolebycompany();
    this.user.IDCOMPANYUSER=this.userService.getcompany();
    this.user.IDROLE="TODOS";

    this.listall();



  }

  getrolebycompany(){
    this.roleService.getrolebycompany(this.token||'',this.role).subscribe(
        response=>{
          if(response.code==200){
            this.rol=response.data;

          }

        },error=>{
          console.log(error);
        }
    )
  }
  listall(){

    this.userService.getuserbycompany(this.token||'',this.user).subscribe(
      response=>{
        this.isloading=false;
        if(response.code==200){
          this.ELEMENT_DATA=response.data;
          this.dataSource=new MatTableDataSource(this.ELEMENT_DATA);
        }

      },error=>{

      }
    )
  }

  list(){
    this.user.IDCOMPANYUSER=this.userService.getcompany();
    this.user.IDROLE=this.formulario.value.IDROLE;

    this.userService.getuserbycompany(this.token||'',this.user).subscribe(
      response=>{
        this.isloading=false;
        if(response.code==200){
          this.ELEMENT_DATA=response.data;
          this.dataSource=new MatTableDataSource(this.ELEMENT_DATA);
        }
      },error=>{

      }
    )



  }
  deleteuser(element:string){
    this.user.ID=element
    this.userService.delete(this.token||'',this.user).subscribe(
      response=>{

        if(response.code==200){
          this.isloading=true;
          this.listall();
        }
      },error=>{

      }
    )

  }
  register(){

    this.user.USERNAME=this.frmcreauser.value.USERNAME;
    this.user.PASSWORD=this.frmcreauser.value.PASSWORD;
    this.user.EMAIL=this.frmcreauser.value.EMAIL;
    this.user.NAME=this.frmcreauser.value.NAME;
    this.user.PRIMARYNAME=this.frmcreauser.value.APELLIDOPATERNO;
    this.user.LASTNAME=this.frmcreauser.value.APELLIDOMATERNO;
    this.user.IDROLE=this.frmcreauser.value.IDROLE;
    this.user.IDCOMPANYUSER=this.userService.getcompany();
    this.userService.register(this.token||'',this.user).subscribe(
      response=>{

        if(response.code=='200'){
          this.frmcreauser.reset();
          this.listall();

        }


      },error=>{

      }
    )

  }
  edita(element:string){
    console.log(element);
    this.dialog.open(UsuariosEditDialog,{
      data:{
        idusuario:element
      }
    });
  }



}

@Component({
  selector: 'usuariosedit',
  templateUrl: 'usuariosedit.html',
})
export class UsuariosEditDialog {
  constructor(public dialogRef: MatDialogRef<UsuariosEditDialog>) {}
}
