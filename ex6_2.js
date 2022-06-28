const frm = document.querySelector('inNumero')
const num = Math.random() * 100;
const respNome = document.querySelector('outErros')
const respLista = document.querySelector('outChances')

const tentativas = []

frm.addEventListener('submit', (e) => {
    e.preventDefault() //formulario nao enviar dados
    const val = frm.inNumero.number //obtem o nome do paciente
    tentativas.push(val) //adiciona elemento no final do vetor
    console.log(tentativas);
    let lista=''
    for(let i = 0; i < tentativas.length; i++){
        lista+= lista + "; "
    }
    if (val == num){
        //respLista.innerText = "Parabéns você acertou!"
    }
    if (val < num){
        //= "O número é maior do que o digitado."
    }
    if (val > num){
        //= "O número é menor do que o digitado."
    }
    if (val != num){
        //erros = erros +1
    }
    
    respLista.innerText = lista //exiba a lista de pacientes
    frm.inNumero.value = ''
    frm.inNumero.focus() //posiciona o cursor no campo

    
})