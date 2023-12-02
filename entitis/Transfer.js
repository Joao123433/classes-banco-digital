const Deposit = require("./Deposit")

module.exports = class Transfer extends Deposit { // transferencia
  constructor(usuarioEnviou, usuarioRecebeu, valor) {
    super(valor)
    this.usuarioEnviou = usuarioEnviou
    this.usuarioRecebeu = usuarioRecebeu
  }
}
