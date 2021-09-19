import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ListResolver } from './list.resolver';

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
  ],
  exports: [
    ListComponent,
  ],
  providers: [
    ListResolver,
  ]
})
export class ListModule { }
