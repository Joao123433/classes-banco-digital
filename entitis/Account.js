module.exports = class Account {
  #saldo
  constructor(donoConta) {
    this.#saldo = 0 
    this.depositos = []
    this.emprestimos = []
    this.transferencias = []
    this.donoConta = donoConta
  }

  get saldo() {
    return this.#saldo
  }

  addDeposito(deposit, senha) {
    if(this.donoConta.verificaSenha(senha)) {
      this.#saldo += deposit.valor
      this.depositos.push(deposit)
    } else {
      console.log("Senha Invalida")
    }
  }

  addEmprestimo(loan, senha) {
    if(this.donoConta.verificaSenha(senha)) {
      this.#saldo += loan.valor
      this.emprestimos.push(loan)
    } else {
      console.log("Senha Invalida")
    }
  }

  transfer(transfer, senha) {
    if(this.donoConta.verificaSenha(senha)) {
      if(transfer.usuarioRecebeu === this.donoConta) {
        this.#saldo += transfer.valor
        this.transferencias.push(transfer)
      } else {
        this.#saldo -= transfer.valor
        this.transferencias.push(transfer)
      }
    } else {
      console.log("Senha Invalida")
    }
  }
}
