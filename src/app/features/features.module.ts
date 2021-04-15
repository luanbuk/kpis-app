import { NgModule } from '@angular/core';
import { ArchInternalsModule } from '../arch/internals/arch-internals.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ArchInternalsModule
  ]
})
export class LayoutsModule { }
