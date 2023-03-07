import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { Zone } from 'src/app/models/Zone';
import { ZonasService } from 'src/app/services/zonas.service';
import { UserService } from 'src/app/services/user.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.css']
})
export class ZonasComponent implements OnInit {
  public zonas:Zone
  public token=this.userService.gettoken();
  public zone:any;
  public clients:any;
  public isloading:boolean=true;
  frmcrearzonas:FormGroup;
  ELEMENT_DATA:Zone[]=[];
  dataSource !:MatTableDataSource<any>;
  displayedColumns: string[] = ['ID', 'NAME','CLIENTNAME','ACCIONES'];
  constructor(
    public zonasService:ZonasService,
    public userService:UserService,
    public clientsService:ClientesService,
    private fb:FormBuilder,
  ) {
    this.zonas=new Zone('','','');
    this.frmcrearzonas=this.fb.group({
      IDCLIENTE:['',Validators.required],
      DESCRIPCION:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.getall();
    this.allclients();
  }


  allclients(){
      this.clientsService.getall(this.token||'').subscribe(
        response=>{
          this.clients=response.data;
        },error=>{

        }
      )
  }

  getall(){
    this.isloading=true;
    this.zonasService.getallzones(this.token||'').subscribe(
      response=>{
        this.isloading=false
          this.zone=response.data;
          this.ELEMENT_DATA=response.data;
          this.dataSource=new MatTableDataSource(this.ELEMENT_DATA);
      },error=>{
        this.isloading=false;
      }
    )
  }

  deletezona(item:string){
    console.log(item);
    this.zonas.ID=item;
    this.zonasService.delete(this.token||'',this.zonas).subscribe(
      response=>{
        if(response.code==200){
          this.getall();
        }
      },error=>{

      }
    )
  }

  editazona(item:string){

  }
  registrar(){
      this.zonas.IDCLIENT=this.frmcrearzonas.value.IDCLIENTE;
      this.zonas.NAME=this.frmcrearzonas.value.DESCRIPCION;

      this.zonasService.register(this.token||'',this.zonas).subscribe(
        response=>{
            if(response.code=='200'){
              this.frmcrearzonas.reset();
              this.getall();
            }
        },error=>{

        }
      )
  }

}
