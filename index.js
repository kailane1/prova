const converter = (letra, chave) => {
    const alf = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z";
    for (let i=0; i < alf.length; i++) {
        if (letra === alf[i]) {
            return alf[(i + chave) % alf.length];
        }
    }
    return letra;
};

const cifraLetra = (letra, chave) => {
    const alf = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z";
    for (let i = 0; i < alf.length; i++) {
        if (letra === alf[i]) {
            return alf[(i + chave) % alf.length];
        }
    }
    return letra;
};

const decifraLetra = (letra, chave) => {
    const alf = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z";
    for (let i = 0; i < alf.length; i++) {
        if (letra === alf[i]) {
            return alf[(i - chave + alfabeto.length) % alf.length];
        }
    }
    return letra;
};

const criptografia = (mensagem, callback) => {
    let resultado = '';
    for (let i = 0; i < mensagem.length; i++) {
        resultado += callback(mensagem[i], 3);
    }
    return resultado;
};

module.exports = {converter,cifraLetra,decifraLetra,criptografia};