import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioService } from '../funcionario.service';
import { ListarFuncionarioComponent } from '../listar-funcionario/listar-funcionario.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarFuncionarioComponent } from '../cadastrar-funcionario/cadastrar-funcionario.component';


@NgModule({
  declarations: [
    ListarFuncionarioComponent,
    CadastrarFuncionarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    FuncionarioService
  ]
})
export class FuncionarioModule { }
