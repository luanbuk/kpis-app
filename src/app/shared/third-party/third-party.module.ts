import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

const modules = [MaterialModule];

@NgModule({
  declarations: [],
  imports: [ CommonModule, MaterialModule ],
  exports: [ MaterialModule ]
})
export class ThirdPartyModule { }
