/* 1. Rolagem suave para a tabela quando clicar no botão "Comece o Cronograma" */
const botaoComeçar = document.querySelector('.btn-pink-lg');

botaoComeçar.addEventListener('click', function(e) {
  e.preventDefault(); // Evita a rolagem brusca padrão do navegador
  const destino = document.querySelector('#tabela-cronograma');
  
  destino.scrollIntoView({
    behavior: 'smooth' // Realiza o deslizamento suave
  });
});

/* 2. Seleção dos botões e da caixinha de exibição do resumo do cabelo */
const botoesCurvatura = document.querySelectorAll('.btn-pink[data-tipo]');
const caixaResultado = document.querySelector('#resultado-curvatura');

/* Dicionário com os textos explicativos de cada curvatura */
const resumos = {
  liso: "<strong>Cabelo Liso (Tipo 1):</strong> Destaca-se pelo seu visual alinhado, brilho característico e caimento natural.",
  ondulado: "<strong>Cabelo Ondulado (Tipo 2):</strong> Possui uma estrutura intermediária entre o liso e o cacheado. Sua principal característica é o formato em 'S' ao longo do comprimento.",
  cacheado: "<strong>Cabelo Cacheado (Tipo 3):</strong> É caracterizado por fios que formam espirais ou 'molas' bem definidas ao longo do comprimento.",
  crespo: "<strong>Cabelo Crespo (Tipo 4):</strong> Possui uma estrutura com curvas extremamente estreitas ou em formato de zigue-zague."
};

/* Adiciona a função de clique para cada um dos botões de cabelo */
botoesCurvatura.forEach(botao => {
  botao.addEventListener('click', function() {
    const tipo = this.getAttribute('data-tipo');
    caixaResultado.innerHTML = resumos[tipo];
  });
});