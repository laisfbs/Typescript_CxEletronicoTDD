function limiteSaque(){
    const limiteSaque = 800;
    return limiteSaque;
}

function horarioMinimo(){
    const horarioMinimo = 6;
    return horarioMinimo;
}

function horarioMaximo(){
    const horarioMaximo = 23;
    return horarioMaximo;
}

const banco = {limiteSaque,
     horarioMaximo, horarioMinimo}
export default banco;