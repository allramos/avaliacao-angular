import { Component } from '@angular/core';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  saldoAtual: number = 0;

  constructor(private service: ContaService){
    this.saldoAtual = service.pegaSaldo();
  }

  //este método deve aumentar o saldo atual em um valor X
  depositar(x: any) {
    this.service.depositar(Number(x));
    this.saldoAtual = this.service.pegaSaldo()
  }
  
  //este método deve diminuir o saldo atual em um valor X
  sacar(x: any) {
    this.service.sacar(Number(x));
    this.saldoAtual = this.service.pegaSaldo()
  }
}
