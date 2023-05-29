import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { Point } from 'src/app/models/Point';
import { PuntoscontrolService } from 'src/app/services/puntoscontrol.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { Clients } from 'src/app/models/Clients';
import { ZonasService } from 'src/app/services/zonas.service';
import { MatTableDataSource} from '@angular/material/table';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-puntoscontrol',
  templateUrl: './puntoscontrol.component.html',
  styleUrls: ['./puntoscontrol.component.css']
})
export class PuntoscontrolComponent implements OnInit {
  public token=this.userService.gettoken();
  public idcompany=this.userService.getcompany();
  public isloading:boolean=false;
  public cliente:any;
  public zonas:any;
  public clientes:Clients;
  public punto:Point;
  selected = new FormControl(0);
  frmcrearpunto:FormGroup;
  ELEMENT_DATA:Point[]=[];
  displayedColumns: string[] = ['ID', 'CLIENTE','ZONA', 'DESCRIPCION','LATITUD', 'LONGITUD','CODIGO','ACCIONES'];
  dataSource !:MatTableDataSource<any>;
  constructor(
    private userService:UserService,
    private puntosControlService:PuntoscontrolService,
    private clientesService:ClientesService,
    private zonasService:ZonasService,
    public fb:FormBuilder
  ) {
    this.punto=new Point('',this.idcompany||'','','','','','','');
    this.clientes=new Clients('','','','','','','');
    this.frmcrearpunto=this.fb.group({
      IDCLIENTE:['',Validators.required],
      IDZONA:['',Validators.required],
      NAME:['',Validators.required],
      LAT:['',Validators.required],
      LONG:['',Validators.required],
      CODE:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.getall();
    this.getclient();
  }
  getclient(){
    this.clientesService.getall(this.token||'').subscribe(
      response=>{
        if(response.code=='200'){
          this.cliente=response.data;
        }
      },error=>{
      }
    );
  }
  getzonebyclient(){
    this.punto.IDCLIENT=this.frmcrearpunto.value.IDCLIENTE
    this.zonasService.getzonasbyclient(this.token||'',this.punto).subscribe(
      response=>{
        if(response.code=='200'){
          this.zonas=response.data;
        }
      },error=>{

      }
    );
  }

  registrar(){
    this.punto.IDCLIENT=this.frmcrearpunto.value.IDCLIENTE;
    this.punto.IDZONE=this.frmcrearpunto.value.IDZONA;
    this.punto.NAME=this.frmcrearpunto.value.NAME;
    this.punto.LAT=this.frmcrearpunto.value.LAT;
    this.punto.LONG=this.frmcrearpunto.value.LONG;
    this.punto.CODE=this.frmcrearpunto.value.CODE;

    this.puntosControlService.register(this.token||'',this.punto).subscribe(
      response=>{
        if(response.code==200){
          this.frmcrearpunto.reset();
          this.getall();
        }
      },error=>{

      }
    );
  }

  getall(){
    this.puntosControlService.getall(this.token||'').subscribe(
      response=>{
        if(response.code==200){
          this.ELEMENT_DATA=response.data;
          this.dataSource=new MatTableDataSource(this.ELEMENT_DATA);

        }
      },error=>{

      }
    );
  }
  delete(item:string){
    this.punto.ID=item
    this.puntosControlService.delete(this.token||'',this.punto).subscribe(
      response=>{
        if(response.code=='200'){
          this.getall();

        }
      },error=>{

      }
    )
  }

  edita(item:string){
    this.selected.setValue(1);

  }



}
