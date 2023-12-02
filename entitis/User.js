const Account = require("./Account")

module.exports = class User {
  #senha
  constructor(nome, email, senha) {
    this.nome = nome
    this.email = email
    this.#senha = senha
    this.conta = new Account(this)
  }

  get depositos() {
    return this.conta.depositos
  }

  get emprestimos() {
    return this.conta.emprestimos
  }

  get transferencias() {
    return this.conta.transferencias
  }

  get saldo() {
    return this.conta.saldo
  }

  verificaSenha(senhaVerificacao) {
    return this.#senha === senhaVerificacao
  }

  changePassword(emailVerificacao, senhaVerificacao, novaSenha) {
    if(emailVerificacao === this.email && this.verificaSenha(senhaVerificacao)) {
      this.#senha = novaSenha
      console.log("Senha alterada")  
    }
  }
}

