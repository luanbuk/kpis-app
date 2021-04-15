import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ComponentsModule } from './shared/components/components.module';
import { API_URL } from './core/api.service';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule
  ],
  providers: [
    { provide: API_URL, useValue: environment.api }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
