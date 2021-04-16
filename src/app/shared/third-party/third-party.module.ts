import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ChartsModule } from 'ng2-charts';

const modules = [MaterialModule, ChartsModule];

@NgModule({
  declarations: [],
  imports: [ CommonModule, ...modules ],
  exports: [ ...modules ]
})
export class ThirdPartyModule { }
