import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private saldo: number = 0;

  constructor() { }

  // Crie aqui um método para depositar um valor na conta
  depositar(valor: number) {
    this.saldo += valor;
  }

  // Crie aqui um método para sacar um valor da conta
  sacar(valor: number) {
    this.saldo -= valor;
  }

  pegaSaldo(){
    return this.saldo;
  }

}
