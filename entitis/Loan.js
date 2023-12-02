const Deposit = require("./Deposit")
const Installment = require("./Installment")

module.exports = class Loan extends Deposit{ // emprestimo
  static #taxaJuros = 15
  constructor(valorEmprestimo, dataCriacao, numerosParcelasEmprestimo) {
    super(valorEmprestimo, dataCriacao)
    this.numerosParcelasEmprestimo = []
    this.calcParcelas(numerosParcelasEmprestimo)
  }

  calcParcelas(numerosParcelas) {
    for(let i = 1; i <= numerosParcelas; i++) {
      const parcelasIndividuais = this.valor / numerosParcelas
      this.numerosParcelasEmprestimo.push(new Installment(parcelasIndividuais, i, "pendente", Loan.taxaJuros))
    }
  }

  static get taxaJuros() {
    return Loan.#taxaJuros
  }

  static set taxaJuros(juros) {
    Loan.#taxaJuros = juros
  }
}

