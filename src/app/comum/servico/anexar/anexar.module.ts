import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

import { AnexarService } from './anexar.service';
import { AnexarComponent } from './anexar.component';
import { ImagemComponent } from './imagem/imagem.component';

@NgModule({
  declarations: [
    AnexarComponent,
    ImagemComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatTabsModule,
  ],
  entryComponents: [
    AnexarComponent,
    ImagemComponent
  ],
  providers: [
    AnexarService,
  ]
})
export class AnexarModule { }
