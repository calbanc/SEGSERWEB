import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:'login', component:LoginComponent},
  { path:'supervisor', loadChildren:()=>import('./mdi-supervisor/supervisor.module').then(m=>m.SupervisorModule)},
  // { path:'cliente', component:MdiClientesComponent},
  { path:'logout/:sure', component:LoginComponent},
  { path:'**',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


