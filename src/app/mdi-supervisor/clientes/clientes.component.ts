import { Component, OnInit ,Inject} from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { UserService } from 'src/app/services/user.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clients } from 'src/app/models/Clients';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  public cliente:Clients
  public token=this.userService.gettoken();
  public company=this.userService.getcompany();
  ELEMENT_DATA:Clients[]=[];
  public isloading:boolean=true;
  displayedColumns:string[]=['ID', 'NAME','ADDRES', 'COUNTRY','DATEINIT','ACCIONES'];
  frmcrearcliente:FormGroup;

  constructor(
    private clienteService:ClientesService,
    private userService:UserService,
    private fb:FormBuilder,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB');
    this.cliente=new Clients('','','','','','','');
    this.frmcrearcliente=this.fb.group({
        NAME:['',Validators.required],
        ADDRES:['',Validators.required],
        COUNTRY:['',Validators.required],
        DATEINIT:['',Validators.required],
        EMAIL:['',Validators.required]
    });
  }

  register(){
    this.cliente.NAME= this.frmcrearcliente.value.NAME;
    this.cliente.ADDRES=this.frmcrearcliente.value.ADDRES;
    this.cliente.COUNTRY=this.frmcrearcliente.value.COUNTRY;
    this.cliente.DATEINIT=this.frmcrearcliente.value.DATEINIT;
    this.cliente.IDCOMPANY=this.company||'';
    this.cliente.EMAIL=this.frmcrearcliente.value.EMAIL;
    this.clienteService.register(this.token||'',this.cliente).subscribe(
      response=>{
        if(response==200){
          this.frmcrearcliente.reset();
          this.listarclientes();
        }
      },error=>{

      }
    )

  }
  ngOnInit(): void {
    this.listarclientes();
  }


  listarclientes(){
    this.isloading=true;
    this.clienteService.getall(this.token||'').subscribe(
      response=>{
        if(response.code==200){
          this.isloading=false;
          this.ELEMENT_DATA=response.data;
          this.dataSource=new MatTableDataSource(this.ELEMENT_DATA);
        }

      },error=>{
        this.isloading=false;
      }
    );


  }

  deleteclient(item:string){
    this.cliente.ID=item;
    this.clienteService.delete(this.token||'',this.cliente).subscribe(
      response=>{
        if(response.code==200){
          this.listarclientes();
        }
      },error=>{

      }
    );
  }
  edita(item:string){

  }

}
@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Clients) {}
}
