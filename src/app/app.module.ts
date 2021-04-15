import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ThirdPartyModule } from './shared/third-party/third-party.module';
import { ComponentsModule } from './shared/components/components.module';
import { API_URL } from './core/api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThirdPartyModule,
    ComponentsModule
  ],
  providers: [
    { provide: API_URL, useValue: environment.api }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
