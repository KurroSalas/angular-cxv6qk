import { BehaviorSubject, Observable } from 'rxjs';

class _ContadorUsuariosInstanciacion {
  private static _instancia: _ContadorUsuariosInstanciacion;

  private origen: BehaviorSubject<number>;
  public datos: Observable<number>;

  public static recuperarInstancia(): _ContadorUsuariosInstanciacion {
    return this._instancia
      ? this._instancia
      : new _ContadorUsuariosInstanciacion();
  }

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

const ContadorUsuariosInstanciacion: _ContadorUsuariosInstanciacion =
  _ContadorUsuariosInstanciacion.recuperarInstancia();
export { ContadorUsuariosInstanciacion };
