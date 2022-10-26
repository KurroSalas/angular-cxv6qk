import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CalculadoraComponent } from './calculadora.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CalculadoraComponent],
  exports: [CalculadoraComponent],
})
export class CalculadoraModule {}
