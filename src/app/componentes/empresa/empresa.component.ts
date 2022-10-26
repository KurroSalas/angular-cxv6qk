import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
})
export class EmpresaComponent implements OnInit {
  public formularioRegistro: FormGroup;
  public esFormularioErroneo: boolean;
  public empresaCreada: boolean;

  public onSubmit(): void {
    this.esFormularioErroneo = false;
    this.empresaCreada = false;

    if (this.formularioRegistro.invalid) {
      this.esFormularioErroneo = true;
      return;
    }
    
    // Registramos la nueva empresa.
    this.empresaCreada = true;
  }
  
  constructor() {}
  
  ngOnInit(): void {
    this.inicializarVariables();
    this.inicializarFormulario();
  }

  private inicializarVariables(): void {
    this.esFormularioErroneo = false;
    this.empresaCreada = false;
  }

  private inicializarFormulario(): void {
    this.formularioRegistro = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
}
