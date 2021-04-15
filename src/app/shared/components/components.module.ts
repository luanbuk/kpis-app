import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThirdPartyModule } from '../third-party/third-party.module';
import { LayoutComponent } from './layout/layout.component';

const components = [LayoutComponent];

@NgModule({
  declarations: [ ...components  ],
  exports: [ ...components ],
  imports: [
    CommonModule, ThirdPartyModule
  ]
})
export class ComponentsModule { }
