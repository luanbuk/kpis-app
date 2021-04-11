import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './arch/libs/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './arch/internals/components/layout/layout.component';
import { API_URL } from './arch/internals/api/api.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    { provide: API_URL, useValue: environment.api }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
