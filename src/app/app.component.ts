import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from './clases/usuario.class';
import { ContadorUsuariosInyeccion } from './servicios/contador-usuarios-inyeccion.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public usuarios: Usuario[];
  public mostrarMensajeNuevoUsuario: boolean;

  public errorGlobalFormulario: boolean;
  public erroresFormulario: string[];

  public formularioRegistro: FormGroup;

  constructor(private contadorUsuariosInyeccion: ContadorUsuariosInyeccion) {}

  ngOnInit(): void {
    this.inicializarVariables();
  }

  public onSubmit(event: Event): void {
    event.preventDefault();

    if (!this.esFormularioValido()) {
      return;
    }

    const nuevoUsuario: Usuario = new Usuario({
      nombre: this.formularioRegistro.controls.nombre.value,
      apellido_1: this.formularioRegistro.controls.apellido_1.value,
      apellido_2: this.formularioRegistro.controls.apellido_2.value,
      email: this.formularioRegistro.controls.email.value,
    });

    if (nuevoUsuario) {
      this.usuarios.push(nuevoUsuario);
      this.contadorUsuariosInyeccion.sumarUsuarioActivo();

      this.mostrarMensajeNuevoUsuario = true;
    }
  }

  private inicializarVariables(): void {
    this.usuarios = [];
    this.mostrarMensajeNuevoUsuario = false;
    this.inicializarFormulario();
  }

  private inicializarFormulario(): void {
    this.formularioRegistro = new FormGroup({
      nombre: new FormControl(''),
      apellido_1: new FormControl(''),
      apellido_2: new FormControl(''),
      email: new FormControl(''),
    });

    this.formularioRegistro.valueChanges.subscribe(() => {
      this.mostrarMensajeNuevoUsuario = false;
    });
  }

  private esFormularioValido(): boolean {
    let esFormularioValido: boolean = false;

    console.log(this.formularioRegistro);
    return false;
  }
}
