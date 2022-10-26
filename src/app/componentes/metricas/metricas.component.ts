import { Component, OnInit } from '@angular/core';
import { ContadorUsuariosInyeccion } from '../../servicios/contador-usuarios-inyeccion.service';

@Component({
  selector: 'app-metricas',
  templateUrl: './metricas.component.html',
  styleUrls: ['./metricas.component.css'],
})
export class MetricasComponent implements OnInit {
  public totalUsuarios: number;

  constructor(private contadorUsuariosInyeccion: ContadorUsuariosInyeccion) {}

  ngOnInit(): void {
    this.inicializarVariables();
    this.recuperarDatos();
  }

  private inicializarVariables(): void {
    this.totalUsuarios = 0;
  }

  private recuperarDatos(): void {
    this.contadorUsuariosInyeccion.datos.subscribe((totalUsuarios: number) => {
      this.totalUsuarios = totalUsuarios;
    });
  }
}
