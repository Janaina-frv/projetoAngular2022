import { Routes } from '@angular/router';
import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';

export const ROUTERS: Routes = [
   {
    path: 'funcionarios/listar', component:ListarFuncionarioComponent
   },
   {
   path: 'funcionarios/cadastrar', component:CadastrarFuncionarioComponent
   },
   {
      path: "funcionarios",
      redirectTo: 'funcionarios/listar'
   }
]