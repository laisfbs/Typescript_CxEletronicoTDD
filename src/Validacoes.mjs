import banco from '../src/Banco.mjs'
import conta from './Conta.mjs'

function validaLimiteHorario(horarioOperacao){
    if(horarioOperacao < banco.horarioMinimo() || horarioOperacao >= banco.horarioMaximo()){
    return "Os saques somente são permitidos entre 6h00min e 22h59"
    }
}            

function validaLimiteSaque(saqueAtual){
    if(saqueAtual > banco.limiteSaque()){
        return "O valor de um único saque  no caixa eletrônico está limitado a R$ 800,00"
        }   return "Limite de saque ok"
}

function validaSaldo(valorSaque, limiteChequeEspecial, saldo){
    if(valorSaque > saldo && !conta.validaChequeEspecial(valorSaque, limiteChequeEspecial, saldo)){
        return "Saldo insuficiente"
    } 
    if(valorSaque <=saldo){
        saldo = saldo - valorSaque
        return saldo
    }
    if(valorSaque > saldo && conta.validaChequeEspecial(valorSaque, limiteChequeEspecial, saldo)){
        saldo = saldo - valorSaque
        return saldo
    }
}  

const validacoes = {validaLimiteSaque, validaLimiteHorario, validaSaldo}
export default validacoes;
