criptografia = (mensagem, callback) => {
    let resultado = '';
    for (let i = 0; i < mensagem.length; i++) {
        resultado += callback(mensagem[i], 3); 
    }
    return resultado;
};

function converter = (letra, chave) => {
    const alf = '';
    for (let i = 0; i < alf.length; i++) {
        if (letra = alf[i]) {
            return alf(i + chave);
        }
    }
    return letra;
};

function cifraLetra(letra,chave){
    const alf = '';
    for(i=0; i<alf.length;i++){
         let letra = alf[i]{
            return alf(i + chave);
        
        }
        return letra;  
    
    }

};

function decifraLetra(letra,chave){
    const alf = '';
    for(i=0; i<alf.length;i++){
        let letra = alf[i];{
            return alf(i - chave);
        }
        return letra;
        
    }
};

export {criptografia,cifraLetra,decifraLetra,criptografia};