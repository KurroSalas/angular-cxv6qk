import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContadorUsuariosInyeccion {
  private origen: BehaviorSubject<number>;
  public datos: Observable<number>;

  constructor() {
    this.origen = new BehaviorSubject(0);
    this.datos = this.origen.asObservable();
  }

  public sumarUsuarioActivo(): void {
    this.origen.next(this.origen.getValue() + 1);
  }

  public restarUsuarioActivo(): void {
    this.origen.next(this.origen.getValue() - 1);
  }
}
