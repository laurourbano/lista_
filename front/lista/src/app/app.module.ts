import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { TableComponent } from './components/table/table.component';
import { ContatoFormComponent } from './components/contato-form/contato-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TableComponent,
    ContatoFormComponent
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
