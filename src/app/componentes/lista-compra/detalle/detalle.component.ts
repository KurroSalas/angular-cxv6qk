import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit, OnChanges {

  @Input('nuevoItem') public nuevoItem: string;

  @Output('totalItems') public totalItemsEmitter: EventEmitter<number>;

  public lista: string[];

  constructor() {
    this.totalItemsEmitter = new EventEmitter<number>();
  }

  ngOnInit() {
    this.inicializarVariables();
  }

  ngOnChanges(cambio: SimpleChanges): void {
    if (this.esCambioValido(cambio)) {
      this.lista.push(cambio?.nuevoItem.currentValue);

      this.totalItemsEmitter.emit(this.lista.length);
    }
  }

  private inicializarVariables(): void {
    this.lista = [];
  }

  private esCambioValido(cambio: SimpleChanges): boolean {
    return !!cambio?.nuevoItem?.currentValue;
  }

}