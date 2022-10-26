import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario.class';
import { EError } from '../enums/errors.enum';
import { _ServicioComun } from '../servicios/comun.service';

const tablaUsuarios: Usuario[] = [
  new Usuario({
    nombre: 'Carlos',
    apellido_1: 'Pérez',
    apellido_2: 'Tome',
    email: 'carlos@perez.com',
  }),
  new Usuario({
    nombre: 'María',
    apellido_1: 'López',
    apellido_2: 'Valle',
    email: 'maria@lopez.com',
  }),
];

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public async obtenerUsuarioPorEmail(email: string): Promise<Usuario> {
    return new Promise(async (resolve, reject) => {
      try {
        // Simulamos una espera de respuesta del servidor.
        await _ServicioComun.sleep();

        const usuario: Usuario = tablaUsuarios.find(
          (usuario: Usuario) =>
            usuario.email.toLowerCase() === email.toLowerCase()
        );

        if (usuario) {
          resolve(usuario);
        } else {
          reject(EError.E404);
        }
      } catch (error) {
        // Se ha producido un error no especificado.
        reject(EError.E500);
      }
    });
  }

  public async obtenerUsuarios(): Promise<Usuario[]> {
    return new Promise(async (resolve, reject) => {
      try {
        // Simulamos una espera de respuesta del servidor.
        await _ServicioComun.sleep();

        const usuarios: Usuario[] = [...tablaUsuarios];

        if (usuarios?.length > 0) {
          resolve(usuarios);
        } else {
          reject(EError.E404);
        }
      } catch (error) {
        // Se ha producido un error no especificado.
        reject(EError.E500);
      }
    });
  }

  public async crearUsuario(usuario: Usuario): Promise<Usuario> {
    return new Promise(async (resolve, reject) => {
      try {
        // Simulamos una espera de respuesta del servidor.
        await _ServicioComun.sleep();

        tablaUsuarios.push(usuario);
        resolve(usuario);
      } catch (error) {
        // Se ha producido un error no especificado.
        reject(EError.E500);
      }
    });
  }
}
