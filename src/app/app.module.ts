import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SupervisorModule } from './mdi-supervisor/supervisor.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModuleModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SupervisorModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
