import { NgModule } from '@angular/core';
import { DatosPipe } from './datos.pipe';

@NgModule({
  declarations: [DatosPipe],
  exports: [DatosPipe],
})
export class PipeModule {}
