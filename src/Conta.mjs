function saldo(saldoRecebido){
    let saldoAtual = saldoRecebido;
    return saldoAtual;
}

function validaChequeEspecial(valor, limite, saldo){
    return limite >= valor - saldo

}

const conta = {saldo, validaChequeEspecial}
export default conta

