import { Component, OnInit } from '@angular/core';

enum EAccion {
  DIVIDIR = '/',
  MULTIPLICAR = 'x',
  RESTAR = '-',
  SUMAR = '+',
}

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  public nombreComponente: string;
  public resultado: number;
  public cantidad: number;
  public operacion: EAccion;
  public acciones: typeof EAccion;

  public ngOnInit(): void {
    this.inicializarVariables();
  }

  public cambioCantidad(): void {
    if (this.cantidad === null) {
      this.cantidad = 0;
    }
  }

  public calcular(): void {
    const operaciones = {
      '/': () => (this.resultado /= this.cantidad),
      x: () => (this.resultado *= this.cantidad),
      '-': () => (this.resultado -= this.cantidad),
      '+': () => (this.resultado += this.cantidad),
    };

    this.resultado = operaciones[this.operacion]();
    this.cantidad = 0;
  }

  public restaurar(): void {
    this.resultado = 0;
  }

  constructor() {}

  private inicializarVariables(): void {
    this.nombreComponente = 'COMPONENTE CALCULADORA';
    this.resultado = 0;
    this.cantidad = 0;
    this.operacion = EAccion.SUMAR;
    this.acciones = EAccion;
  }
}
