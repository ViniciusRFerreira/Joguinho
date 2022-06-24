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
    
    respLista.innerText = tentativas //exiba a lista de pacientes
    frm.inNumero = ''
    frm.inNumero.focus() //posiciona o cursor no campo

    
})