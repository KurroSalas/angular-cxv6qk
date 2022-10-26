import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PipeModule } from '../modulos/pipes/pipe.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, PipeModule],
  exports: [BrowserModule, FormsModule, ReactiveFormsModule, PipeModule],
})
export class SharedModule {}
