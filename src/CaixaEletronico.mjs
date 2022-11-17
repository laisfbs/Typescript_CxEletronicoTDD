function impressaoComprovante(tela, recibo){
    if(tela && recibo){
    return "Comprovante impresso com sucesso!"
    }
    return "Retornando a tela inicial"
}

const caixaEletronico = { impressaoComprovante}
export default caixaEletronico
