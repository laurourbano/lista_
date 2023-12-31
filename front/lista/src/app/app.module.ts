import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentoFormComponent } from './components/departamento-form/departamento-form.component';
import { FuncionarioFormComponent } from './components/funcionario-form/funcionario-form.component';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FuncionarioListComponent,
    FuncionarioFormComponent,
    DepartamentoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
