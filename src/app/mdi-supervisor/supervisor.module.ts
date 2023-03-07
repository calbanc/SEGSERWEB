import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { SupervisorRoutingModule } from './supervisor-routing.module';
import { MdiSupervisorComponent } from './mdi-supervisor.component';
import { ClientesComponent } from './clientes/clientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ZonasComponent } from './zonas/zonas.component';
import { PuntoscontrolComponent } from './puntoscontrol/puntoscontrol.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenerarondaComponent } from './generaronda/generaronda.component';


@NgModule({
  declarations: [
    MdiSupervisorComponent,
    UsuariosComponent,
    ZonasComponent,
    PuntoscontrolComponent,
    ReportesComponent,
    ClientesComponent,
    GenerarondaComponent

  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    SupervisorRoutingModule,
    ReactiveFormsModule
  ]
})
export class SupervisorModule { }
