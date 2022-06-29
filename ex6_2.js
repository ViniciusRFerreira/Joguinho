let num = Math.floor(Math.random() * 100);
console.log(num);
let erro = [];

const frm = document.querySelector("form");
let outDica = document.getElementById("outDica");
let outErro = document.getElementById("outErros");
let outChance = document.getElementById("outChances");
let inNumero = document.getElementById("inNumero");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  let tentativas = Number(frm.inNumero.value);

  if (tentativas != num) {

    if (erro.length > 5) {
      outErro.textContent = `${erro.length}: (${erro})`;
      outChance.textContent = 6 - erro.length;
      outDica.textContent = `Você perdeu! O número certo era: ${num}`;
      frm.btNovo.setAttribute("class", "exibe");
      return;
    }
    erro.push(tentativas);
    outErro.textContent = `${erro.length}: (${erro})`;
    outChance.textContent = 6 - erro.length;
    inNumero.value = inNumero.defaultValue;
    
    if (tentativas > num) {
      inNumero.setAttribute("max", tentativas);
    } else {
      inNumero.setAttribute("min", tentativas);
    }
    outDica.textContent = `O número é maior que ${inNumero.getAttribute("min")} e menor que ${inNumero.getAttribute("max")}.`;

  } else if (erro.length < 6) {
    outDica.textContent = `Você acertou o número: ${num}. Parabéns!`;
    frm.btNovo.setAttribute("class", "exibe");
    return;
  }

});

frm.btNovo.addEventListener("click", () => {
  console.log("Botão jogar novamente clicado");
  erro = [];
  outDica.textContent = outDica.defaultValue;
  outErro.textContent = 0;
  outChance.textContent = 6;
  inNumero.setAttribute("max", 100);
  inNumero.setAttribute("min", 0);
  inNumero.value = inNumero.defaultValue;
  num = Math.floor(Math.random() * 100); 
  console.log(num);
  frm.btNovo.setAttribute("class", "oculta");
});