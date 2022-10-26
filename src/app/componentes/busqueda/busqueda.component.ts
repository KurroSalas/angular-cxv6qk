import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../../api/api.service';
import { Usuario } from '../../clases/usuario.class';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  public formularioBusqueda: FormGroup;
  public usuario: Usuario;
  public error: string;
  public cargando: boolean;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.inicializarVariables();
  }

  public onSubmit(event: Event): void {
    event.preventDefault();
    const email: string = this.formularioBusqueda.controls.email.value;

    this.usuario = undefined;
    this.error = undefined;

    if (email) {
      this.cargando = true;
      this.apiService
        .obtenerUsuarioPorEmail(email)
        .then((usuario: Usuario) => (this.usuario = usuario))
        .catch((error) => (this.error = error))
        .finally(() => (this.cargando = false));
    }
  }

  private inicializarVariables(): void {
    this.cargando = false;
    this.error = undefined;
    this.inicializarFormulario();
  }

  private inicializarFormulario(): void {
    this.formularioBusqueda = new FormGroup({
      email: new FormControl(''),
    });
  }
}
