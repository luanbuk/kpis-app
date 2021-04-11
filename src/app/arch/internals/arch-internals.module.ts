import { NgModule } from '@angular/core';
import { MaterialModule } from '../libs/material/material.module';
import { ApiService } from './api/api.service';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    LayoutComponent
  ],
  providers:[
    ApiService
  ]
})
export class ArchInternalsModule { }
