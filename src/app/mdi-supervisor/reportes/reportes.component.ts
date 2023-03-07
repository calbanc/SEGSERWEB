import { Component, OnInit } from '@angular/core';
import { Clients } from 'src/app/models/Clients';
import { ClientesService } from 'src/app/services/clientes.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource} from '@angular/material/table';
import { ReporteService } from 'src/app/services/reporte.service';
import { Guards } from 'src/app/models/Guards';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  public token=this.userService.gettoken();
  public client:Clients
  public guards:Guards
  public idcompany=this.userService.getcompany();
  public clientes:any;
  frmbuscarreporte:FormGroup;
  ELEMENT_DATA:Guards[]=[];
  displayedColumns: string[] = ['ID', 'DATE','TIME', 'ZONA','PUNTOCONTROL', 'ISOK','OBSERVATION','TYPEPOINT','TYPEGUARDIA','IMAGEN'];




  dataSource !:MatTableDataSource<any>;

  constructor(
    public reporteService:ReporteService,
    public clientsService:ClientesService,
    public userService:UserService,
    private fb:FormBuilder,
  ) {
    this.guards=new Guards(0,0,0,'',0,0,0,0,'','','','','');
    this.token=this.userService.gettoken();
    this.client=new Clients('','','','','','');
    this.frmbuscarreporte=this.fb.group({
      IDCLIENT:['',Validators.required]
  });
  }

  ngOnInit(): void {
    this.cargarclientes();
  }

  cargarclientes(){
    this.client.IDCOMPANY=this.idcompany||'';
    this.clientsService.searchbycompany(this.token||'',this.client).subscribe(
        response=>{
          this.clientes=response.data;
        },error=>{

        }
    )
  }

  buscar(){
    this.guards.IDCLIENT=this.frmbuscarreporte.value.IDCLIENT;
    this.guards.IDCOMPANY=this.idcompany||'';

    console.log(this.guards);
    this.reporteService.serchbycompanyclient(this.token||'',this.guards).subscribe(
      response=>{
        this.ELEMENT_DATA=response.data;
        this.dataSource=new MatTableDataSource(this.ELEMENT_DATA);

      },error=>{

      }
    )
  }


}
