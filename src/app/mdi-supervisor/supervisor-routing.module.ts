import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { MdiSupervisorComponent } from './mdi-supervisor.component';
import { PuntoscontrolComponent } from './puntoscontrol/puntoscontrol.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ZonasComponent } from './zonas/zonas.component';

const routes:Routes=[
  {
    path:'',
    component:MdiSupervisorComponent,
    children:[
      { path:'usuarios',component:UsuariosComponent},
      { path:'clientes',component:ClientesComponent},
      { path:'zonas',component:ZonasComponent},
      { path:'puntos',component:PuntoscontrolComponent},
      { path:'reportes',component:ReportesComponent},
      { path:'**',component:MdiSupervisorComponent}
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
     RouterModule.forChild(routes),

  ],
  exports:[RouterModule]
})
export class SupervisorRoutingModule { }
