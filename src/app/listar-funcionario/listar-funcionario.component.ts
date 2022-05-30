import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../funcionario/funcionario.model';

@Component({
  selector: 'senac-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    //this.funcionarios = this.listarTodos();
    this.funcionarios = [
      new Funcionario(1,"Fábio"),
      new Funcionario(2,"Maria")
    ]
    
  }

  listarTodos(): Funcionario[]{
    return this.funcionarioService.listarTodos();
  }

}
