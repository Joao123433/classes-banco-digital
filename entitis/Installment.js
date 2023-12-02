module.exports = class Installment { // parcelas
  constructor(valorParcela, numeroParcela, situacao, juros) {
    this.valorParcela = valorParcela + (valorParcela * 15 / 100)
    this.numeroParcela = numeroParcela
    this.situacao = situacao
    this.juros = `${juros}%`
  }
}
