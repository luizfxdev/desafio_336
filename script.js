// script.js

// Array para armazenar os domínios
let domains = [];

// Elementos do DOM
const dominioInput = document.getElementById('dominio-input');
const fragmentosInput = document.getElementById('fragmentos-input');
const addDomainBtn = document.getElementById('add-domain');
const domainsList = document.getElementById('domains-list');
const calcularBtn = document.getElementById('calcular-btn');
const retornarBtn = document.getElementById('retornar-btn');
const resultadoSection = document.getElementById('resultado-section');
const resultadoContent = document.getElementById('resultado-content');
const themeAudio = document.getElementById('theme-audio');
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');
const toggleExamplesBtn = document.getElementById('toggle-examples');
const examplesList = document.getElementById('examples-list');

// Toggle de exemplos
toggleExamplesBtn.addEventListener('click', () => {
  examplesList.classList.toggle('hidden');
  toggleExamplesBtn.textContent = examplesList.classList.contains('hidden')
    ? '💀 Ver Domínios das Trevas 💀'
    : '🔼 Ocultar Domínios 🔼';
});

// Função para preencher exemplo (chamada do HTML)
function fillExample(dominio, fragmentos) {
  dominioInput.value = dominio;
  fragmentosInput.value = fragmentos;
  dominioInput.focus();
}

// Tornar a função global para ser acessível do HTML
window.fillExample = fillExample;

// Controles de áudio
playAudioBtn.addEventListener('click', () => {
  themeAudio.play();
});

pauseAudioBtn.addEventListener('click', () => {
  themeAudio.pause();
});

// Adicionar domínio
addDomainBtn.addEventListener('click', addDomain);

// Permitir adicionar com Enter
fragmentosInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    addDomain();
  }
});

function addDomain() {
  const dominio = dominioInput.value.trim();
  const fragmentos = parseInt(fragmentosInput.value);

  // Validação
  if (!dominio || isNaN(fragmentos) || fragmentos < 0) {
    alert('⚠️ Por favor, insira um domínio válido e uma quantidade de fragmentos!');
    return;
  }

  // Adicionar ao array
  domains.push({ dominio, fragmentos });

  // Atualizar lista visual
  updateDomainsList();

  // Limpar inputs
  dominioInput.value = '';
  fragmentosInput.value = '';
  dominioInput.focus();
}

function updateDomainsList() {
  if (domains.length === 0) {
    domainsList.innerHTML = '';
    return;
  }

  domainsList.innerHTML = domains
    .map(
      (domain, index) => `
        <div class="domain-item">
          <div class="domain-info">
            <div class="domain-name">${domain.dominio}</div>
            <div class="domain-fragments">⚡ ${domain.fragmentos} fragmentos</div>
          </div>
          <button class="remove-btn" onclick="removeDomain(${index})">🗑️</button>
        </div>
      `
    )
    .join('');
}

function removeDomain(index) {
  domains.splice(index, 1);
  updateDomainsList();
}

// Botão Calcular
calcularBtn.addEventListener('click', calculate);

function calculate() {
  // Validação: verificar se há domínios
  if (domains.length === 0) {
    alert('⚠️ Adicione pelo menos um domínio antes de calcular!');
    return;
  }

  // Limpar resultado anterior
  resultadoContent.innerHTML = '';

  // 1. Avaliação Sombria dos Fragmentos
  const avaliacaoResult = avaliacaoSombria(domains);

  // 2. Triunfos Acima das Sombras
  const triunfosResult = triunfosAcimaDasSombras(domains);

  // Exibir resultados
  displayResults(avaliacaoResult, triunfosResult);

  // Mostrar seção de resultado
  resultadoSection.classList.remove('hidden');

  // Scroll suave para o resultado
  resultadoSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Função 1: Avaliação Sombria dos Fragmentos
function avaliacaoSombria(domainsArray) {
  let html = '<div class="calc-step">';
  html += '<div class="calc-label">📊 Cálculo do Total de Fragmentos:</div>';
  html += '<div class="calc-value">';

  // Mostrar cada domínio e seus fragmentos
  domainsArray.forEach((domain, index) => {
    html += `${index + 1}. ${domain.dominio}: ${domain.fragmentos} fragmentos<br>`;
  });

  // Calcular total
  const total = domainsArray.reduce((sum, domain) => sum + domain.fragmentos, 0);

  html += `<br><strong>Total: ${total} fragmentos</strong>`;
  html += '</div></div>';

  // Determinar mensagem
  let mensagem = '';
  if (total < 150) {
    mensagem = 'As sombras aguardam. Continue ceifando conhecimento no mundo oculto! 🗡️';
  } else if (total >= 150 && total < 250) {
    mensagem = 'Você sente o poder das trevas crescendo. O portal do Level 42 brilha à distância! 💀⚡';
  } else {
    mensagem = 'Você dominou as artes proibidas – a eternidade digital é sua! 👁️‍🗨️🌑';
  }

  return { html, mensagem, total };
}

// Função 2: Triunfos Acima das Sombras
function triunfosAcimaDasSombras(domainsArray) {
  let html = '<div class="calc-step">';
  html += '<div class="calc-label">🎯 Análise dos Triunfos:</div>';
  html += '<div class="calc-value">';

  // Calcular média
  const total = domainsArray.reduce((sum, domain) => sum + domain.fragmentos, 0);
  const media = total / domainsArray.length;

  html += `Média de fragmentos: ${media.toFixed(2)}<br><br>`;

  // Identificar domínios acima OU IGUAL à média (>= em vez de >)
  const dominiosAcimaDaMedia = domainsArray.filter(domain => domain.fragmentos >= media);

  html += '<strong>Domínios avaliados:</strong><br>';
  domainsArray.forEach(domain => {
    const acima = domain.fragmentos >= media; // MUDANÇA AQUI: >= em vez de >
    const emoji = acima ? '✅' : '❌';
    const comparacao =
      domain.fragmentos > media
        ? '(ACIMA da média)'
        : domain.fragmentos === media
        ? '(igual à média - DESTACADO)'
        : '(abaixo da média)';
    html += `${emoji} ${domain.dominio}: ${domain.fragmentos} fragmentos ${comparacao}<br>`;
  });

  html += '</div></div>';

  // Resultado final - ordenar por fragmentos (maior para menor)
  let resultado = '';
  if (dominiosAcimaDaMedia.length === 0) {
    resultado = 'Nenhuma conquista se destacou sobre as trevas eternas...';
  } else {
    // Ordenar do maior para o menor
    const dominiosOrdenados = dominiosAcimaDaMedia.sort((a, b) => b.fragmentos - a.fragmentos);
    resultado = dominiosOrdenados.map(d => `• ${d.dominio} (${d.fragmentos} fragmentos)`).join('<br>');
  }

  return { html, resultado, media, dominiosAcimaDaMedia };
}

function displayResults(avaliacao, triunfos) {
  let html = '<div class="results-grid">';

  // Box 1: Avaliação Sombria
  html += '<div class="result-box">';
  html += '<div class="result-box-title">⚡ Avaliação Sombria ⚡</div>';
  html += '<div class="result-box-content">';
  html += avaliacao.html;
  html += '</div></div>';

  // Box 2: Triunfos
  html += '<div class="result-box">';
  html += '<div class="result-box-title">🏆 Triunfos Acima das Sombras 🏆</div>';
  html += '<div class="result-box-content">';
  html += triunfos.html;
  html += '</div></div>';

  html += '</div>';

  // Resultado Final - Mensagem da Avaliação
  html += '<div class="final-result">';
  html += '<div class="final-label">💀 VEREDICTO DO CEIFADOR 💀</div>';
  html += `<div class="final-value">${avaliacao.mensagem}</div>`;
  html += '</div>';

  // Resultado Final - Lista de Triunfos
  html += '<div class="final-result">';
  html += '<div class="final-label">🌟 DOMÍNIOS DESTACADOS 🌟</div>';
  html += `<div class="final-value">${triunfos.resultado}</div>`;
  html += '</div>';

  resultadoContent.innerHTML = html;
}

// Botão Retornar
retornarBtn.addEventListener('click', () => {
  // Limpar domínios
  domains = [];
  updateDomainsList();

  // Limpar inputs
  dominioInput.value = '';
  fragmentosInput.value = '';

  // Esconder resultado
  resultadoSection.classList.add('hidden');
  resultadoContent.innerHTML = '';

  // Focar no primeiro input
  dominioInput.focus();
});
