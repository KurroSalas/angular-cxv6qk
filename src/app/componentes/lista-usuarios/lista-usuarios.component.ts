import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Usuario } from '../../clases/usuario.class';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
})
export class ListaUsuariosComponent implements OnInit {
  public listaUsuarios: Usuario[];
  public error: string;
  public cargando: boolean;

  constructor(private apiService: ApiService) {}

  public ngOnInit(): void {
    this.inicializarVariables();
    this.obtenerUsuarios();
  }

  private inicializarVariables(): void {
    this.listaUsuarios = [];
    this.error = undefined;
    this.cargando = true;
  }

  private obtenerUsuarios(): void {
    this.apiService
      .obtenerUsuarios()
      .then((usuarios: Usuario[]) => (this.listaUsuarios = usuarios))
      .catch((error) => (this.error = error))
      .finally(() => (this.cargando = false));
  }
}
