import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MetricasComponent } from './componentes/metricas/metricas.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';

import { ApiService } from './api/api.service';
import { CalculadoraModule } from './modulos/calculadora/calculadora.module';
import { SharedModule } from './shared/shared.module';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { EmpresaComponent } from './componentes/empresa/empresa.component';
import { ListaCompraComponent } from './componentes/lista-compra/lista-compra.component';
import { DetalleComponent } from './componentes/lista-compra/detalle/detalle.component';

@NgModule({
  imports: [SharedModule, CalculadoraModule],
  declarations: [
    AppComponent,
    MetricasComponent,
    BusquedaComponent,
    ListaUsuariosComponent,
    DetalleComponent,
    ListaCompraComponent,
    EmpresaComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ApiService],
})
export class AppModule {}
