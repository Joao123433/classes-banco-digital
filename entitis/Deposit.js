const dayJS = require("dayjs")

module.exports = class Deposit {
  constructor(valor) {
    this.valor = valor
    this.dataCriacao = dayJS().format("DD/MM/YYYY") 
    this.valido = true
  }
}

