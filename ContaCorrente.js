import Cliente from "./Cliente.js";

export class ContaCorrente {
  agencia;
  _saldo;
  _cliente;

  static numeroDeContas = 0;

  constructor(agencia, cliente, saldo = 0) {
    this.agencia = agencia;
    this.cliente = cliente;
    this._saldo = saldo;

    ContaCorrente.numeroDeContas++;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  depositar(valor) {
    if (valor <= 0) return;

    this._saldo += valor;

    return valor;
  }

  sacar(valor) {
    if (valor >= this._saldo) return;

    this._saldo -= valor;

    return valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);

    conta.depositar(valorSacado);
  }
}

export default ContaCorrente;
