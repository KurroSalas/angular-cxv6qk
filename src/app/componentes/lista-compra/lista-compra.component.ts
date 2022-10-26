import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css'],
})
export class ListaCompraComponent implements OnInit {

  public inputLista: string;
  public nuevoItem: string;
  public esNuevoItemValido: boolean;
  public total: number;

  public guardarNuevoItem(): void {
    this.esNuevoItemValido = true;

    if (!this.inputLista || this.inputLista === '') {
      this.esNuevoItemValido = false;
      return;
    }

    this.nuevoItem = undefined;
    this.nuevoItem = this.inputLista;
    this.inputLista = '';
  }

  public actualizarTotal(total: number): void {
    this.total = total;
  }

  constructor() {}

  ngOnInit(): void {
    this.inicializarVariables();
  }

  private inicializarVariables(): void {
    this.inputLista = '';
    this.nuevoItem = '';
    this.esNuevoItemValido = true;
    this.total = 0;
  }

}