import { Component } from '@angular/core';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  saldoAtual: number = 0;
  lista: string[] = ['abacaxi','uva', 'banana','maçã'];

  alunos = [
    { nome: 'José', nota: 7.5 },
    { nome: 'Maria', nota: 8.5 },
    { nome: 'Francisco', nota: 9.5 },
    { nome: 'Andressa', nota: 10 }
  ]

  constructor(private service: ContaService) {
    this.saldoAtual = service.pegaSaldo();
  }

  //este método deve aumentar o saldo atual em um valor X
  depositar(x: any) {
    this.service.depositar(Number(x));
    this.saldoAtual = this.service.pegaSaldo()
  }

  //este método deve diminuir o saldo atual em um valor X
  sacar(x: any) {
    let valor = Number(x)
    if (this.saldoAtual - valor >= 0) {
      this.service.sacar(valor);
    }
    this.saldoAtual = this.service.pegaSaldo()
  }
}
