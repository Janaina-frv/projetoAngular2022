import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../funcionario/funcionario.model';

@Component({
  selector: 'senac-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  constructor(private funcionarioservice: FuncionarioService, private router: Router) { }

  @ViewChild('formFuncionario') formFuncionario: NgForm
  funcionario: Funcionario

  ngOnInit(): void {
    this.funcionario = new Funcionario();
  }

  cadastrar(): void{
    if(this.formFuncionario.form.valid)
    this.funcionarioservice.cadastrar(this.funcionario);
    this.router.navigate(["funcionarios"])
  }

}
