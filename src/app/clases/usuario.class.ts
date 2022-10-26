import { IUsuario } from '../interfaces/usuario.interface';

export class Usuario implements IUsuario {
  public nombre: string;
  public apellido_1: string;
  public apellido_2: string;
  public email: string;

  constructor(usuario: IUsuario) {
    if (this.esUsuarioValido(usuario)) {
      this.nombre = usuario.nombre;
      this.apellido_1 = usuario.apellido_1;
      this.apellido_2 = usuario.apellido_2;
      this.email = usuario.email;
    }
  }

  public login(): void {
    // El usuario hace login en la aplicación.
  }

  public logout(): void {
    // El usuario hace logout en la aplicación.
  }

  private esUsuarioValido(usuario: IUsuario): boolean {
    return Boolean(
      usuario?.nombre &&
        usuario.nombre !== '' &&
        usuario?.apellido_1 &&
        usuario.apellido_1 !== '' &&
        usuario?.apellido_2 &&
        usuario.apellido_2 !== '' &&
        usuario?.email &&
        usuario.email !== ''
    );
  }
}
