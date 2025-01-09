//PRINCIPAIS DIVS
const nota_fiscal_container = document.querySelector(".nota_fiscal_container");
const form_container = document.querySelector(".form_container");

//INPUTS
const inputValorVenda = document.querySelector("#valor_venda");
const inputItensVendidos = document.querySelector("#itens_vendidos");
const inputIRPF = document.querySelector("#irpf");
const inputPIS = document.querySelector("#pis");
const inputCOFINS = document.querySelector("#cofins");
const inputINSS = document.querySelector("#inss");
const inputISSQN = document.querySelector("#issqn");

//CAMPOS DA NOTA FISCAL
const dataEmissao = document.querySelector("#date_emittion");
const valorTotal = document.querySelector("#totalValue");
const listaItensVendidos = document.querySelector("#lista_itens_vendidos");
const irpfPorcentagem = document.querySelector("#irpfPorcentagem");
const irpfValue = document.querySelector("#irpfValue");
const pisPorcentagem = document.querySelector("#pisPorcentagem");
const pisValue = document.querySelector("#pisValue");
const cofinsPorcentagem = document.querySelector("#cofinsPorcentagem");
const cofinsValue = document.querySelector("#cofinsValue");
const inssPorcentagem = document.querySelector("#inssPorcentagem");
const inssValue = document.querySelector("#inssValue");
const issqnPorcentagem = document.querySelector("#issqnPorcentagem");
const issqnValue = document.querySelector("#issqnValue");
const liquid_value = document.querySelector("#liquid_value");

function isNotVisibleNotaFiscal(){
  nota_fiscal_container.classList.add("isNotVisible")
  form_container.classList.remove("isNotVisible")
  listaItensVendidos.textContent = "";
}
  
function isVisibleNotaFiscal(){
  gerarNotaFiscal();
  nota_fiscal_container.classList.remove("isNotVisible")
  form_container.classList.add("isNotVisible")
}

function gerarNotaFiscal(){
  let data = getDataAtual();
  let itensSeparados = separaItens(inputItensVendidos.value);
  let valorImpostoIRPF = getValorImposto(inputIRPF.value);
  let valorImpostoPIS = getValorImposto(inputPIS.value);
  let valorImpostoCOFINS = getValorImposto(inputCOFINS.value);
  let valorImpostoINSS = getValorImposto(inputINSS.value);
  let valorImpostoISSQN = getValorImposto(inputISSQN.value);
  let liquidValue = 0;
  liquidValue += parseFloat(valorImpostoIRPF) + parseFloat(valorImpostoPIS) + parseFloat(valorImpostoCOFINS) + parseFloat(valorImpostoINSS) + parseFloat(valorImpostoISSQN);

  dataEmissao.textContent = `Data de emissão: ${data}` 
  valorTotal.textContent = `Valor Total da Venda: R$ ${inputValorVenda.value}`
  criaListItens(itensSeparados);
  irpfPorcentagem.textContent = inputIRPF.value;
  pisPorcentagem.textContent = inputPIS.value;
  cofinsPorcentagem.textContent = inputCOFINS.value;
  inssPorcentagem.textContent = inputINSS.value;
  issqnPorcentagem.textContent = inputISSQN.value;
  irpfValue.textContent = valorImpostoIRPF;
  pisValue.textContent = valorImpostoPIS;
  cofinsValue.textContent = valorImpostoCOFINS;
  inssValue.textContent = valorImpostoINSS;
  issqnValue.textContent = valorImpostoISSQN;
  liquid_value.textContent = `VALOR LÍQUIDO: R$ ${liquidValue.toFixed(2)}`;
}

function separaItens(itens){
  return itens.split(",");
}

function getDataAtual(){

  const dataAtual = new Date();

  const dataFormatada = dataAtual.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return dataFormatada;
}

function criaListItens(itensSeparados){
  for(let i = 0; i < itensSeparados.length; i++){
    let li = document.createElement("li");
    li.textContent = itensSeparados[i];
    listaItensVendidos.appendChild(li);
  }
}

function getValorImposto(imposto){
  const numberaleatorio = imposto * (inputValorVenda.value / 100);
  return numberaleatorio.toFixed(2);
}