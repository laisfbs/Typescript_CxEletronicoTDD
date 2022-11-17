import validacoes from '../src/Validacoes.mjs'
import caixaEletronico from '../src/CaixaEletronico.mjs';

describe('Cenario1 - verificacao de horario permitido', () => {
    it('descreve se o saque devera ser permitido no horario correto', () => {

    const horarioOperacao = 5;
    const limiteHorario = validacoes.validaLimiteHorario(horarioOperacao)
    
    expect(limiteHorario).toEqual("Os saques somente são permitidos entre 6h00min e 22h59");
    
    });
});

describe('Cenario2 - verificacao de saque limite', () => {
        it('descreve o o limite de saque possivel', () => {

    var valorSaque = 1000;

    const msgSaque = validacoes.validaLimiteSaque(valorSaque)

    expect(msgSaque).toEqual("O valor de um único saque  no caixa eletrônico está limitado a R$ 800,00");

    });
});

describe('Cenario3 - verificacao de saldo limite, cliente nao tem limite', () => {
    it('descreve se o cliente tem limite de saldo', () => {

var valorSaque = 700;

const msgSaldo = validacoes.validaSaldo(valorSaque, 0, 600)

expect(msgSaldo).toEqual("Saldo insuficiente");

    });
});

describe('Cenario4 - verificacao de saldo limite, cliente nao tem limite', () => {
    it('descreve se o cliente tem limite de saldo', () => {

var valorSaque = 700;

const msgSaldo = validacoes.validaSaldo(valorSaque, 500, 100)

expect(msgSaldo).toEqual("Saldo insuficiente");

    });
});

describe('Cenario5 - verificacao de saldo limite, cliente nao tem limite', () => {
    it('descreve se o cliente tem limite de saldo', () => {

var valorSaque = 200;

const msgSaldo = validacoes.validaSaldo(valorSaque, 0, 600)

expect(msgSaldo).toEqual(400);

    });
});

describe('Cenario6 - verificacao de saldo limite, cliente nao tem limite', () => {
    it('descreve se o cliente tem limite de saldo', () => {

var valorSaque = 500;

const msgSaldo = validacoes.validaSaldo(valorSaque, 500, 100)

expect(msgSaldo).toEqual(-400);

    });
});

describe('Cenario7 - verificacao de saldo limite, cliente nao tem limite', () => {
    it('descreve se o cliente tem limite de saldo', () => {


const validaImpressao = caixaEletronico.impressaoComprovante(true, true)

expect(validaImpressao).toEqual("Comprovante impresso com sucesso!");

    });
});

describe('Cenario8 - verificacao de saldo limite, cliente nao tem limite', () => {
    it('descreve se o cliente tem limite de saldo', () => {


const validaImpressao = caixaEletronico.impressaoComprovante(false, true)

expect(validaImpressao).toEqual("Retornando a tela inicial");

    });
});


