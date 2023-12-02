const Deposit = require("./entitis/Deposit")
const Transfer = require("./entitis/Transfer")
const Loan = require("./entitis/Loan")
const User = require("./entitis/User")


class App {
  static #listaUsuario = []

  static get listaUsuario() {
    return App.#listaUsuario
  }
  
  addNewUser(nome, email, senha) {
    const emailExist = App.findUser(email)
    if(!emailExist) {
      const user = new User(nome, email, senha)
      App.#listaUsuario.push(user)
    }
  }

  static findUser(email) {
    return App.#listaUsuario.find((e) => e.email === email)
  }

  static newDeposit(email, senha, valor) {
    const user = App.findUser(email)
    if(user) {
      const deposit = new Deposit(valor)
      user.conta.addDeposito(deposit, senha)
    }
  }

  static newInstallment(email, senha, valorEmprestimo, numerosParcelasEmprestimo) {
    const user = App.findUser(email)
    if(user) {
      const loan = new Loan(valorEmprestimo, numerosParcelasEmprestimo)
      user.conta.addEmprestimo(loan, senha)
    }
  }

  static newTransfer(usuarioEnviou, usuarioRecebeu, valor, email, senha) {
    const user = App.findUser(email)
    const transfer = new Transfer(usuarioEnviou, usuarioRecebeu, valor)
    user.conta.transfer(transfer, senha) 
  }

  changeTaxaJuros(novaTaxa) {
    Loan.taxaJuros = novaTaxa
  }
}

const app = new App()

app.addNewUser("joao", "joao@gmail.com", "12345")
app.addNewUser("Maria", "maria@gmail.com", "12345")

const usuarios = App.listaUsuario

const joao = App.listaUsuario[0]
const maria = App.listaUsuario[1]

console.log("--------------------------------------------")

App.newDeposit("joao@gmail.com", "12345", 1000)
App.newDeposit("maria@gmail.com", "12345", 1000)

App.newInstallment("joao@gmail.com", "12345", 1500, 7)
App.newTransfer(joao, maria, 150, "joao@gmail.com", "12345")


console.table(usuarios)


console.log("--------------------------------------------")


console.table({ 
  nome: joao.nome, 
  saldo: joao.saldo,
  depositos: joao.depositos, 
  emprestimos: joao.emprestimos, 
  transferencias: joao.transferencias 
})


console.log("--------------------------------------------")


console.table({ 
  nome: maria.nome, 
  saldo: maria.saldo,
  depositos: maria.depositos, 
  emprestimos: maria.emprestimos, 
  transferencias: maria.transferencias 
})
