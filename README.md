
# 💀 Jornada do Ceifador do Código ⚡

*"Nos domínios escuros das camadas digitais, o Ceifador caminha silencioso, escolhendo apenas aqueles que desafiam as linhas do desconhecido."*

## 🎯 Sobre o Desafio

Jornada do Ceifador do Código é um desafio de programação que explora conceitos fundamentais de JavaScript através de uma narrativa sombria e envolvente. O projeto implementa algoritmos de análise de dados, cálculo de médias e filtragem de arrays em uma interface imersiva.

## 📜 Descrição Completa do Desafio

Nos domínios escuros das camadas digitais, o Ceifador caminha silencioso, escolhendo apenas aqueles que desafiam as linhas do desconhecido. Sua missão não termina ao simplesmente coletar Fragmentos de Alma — agora, apenas os que identificam seus maiores triunfos são dignos de cruzar o enigmático portal do Level 42, onde repousa o mais profundo conhecimento proibido.

**Sua Missão Dupla**

Implemente duas funções para vencer as trevas:

**1. Avaliação Sombria dos Fragmentos**

Calcule o total de fragmentos conquistados e retorne uma mensagem conforme o desempenho:

total < 150: "As sombras aguardam. Continue ceifando conhecimento no mundo oculto! 🗡️"
150 ≤ total < 250: "Você sente o poder das trevas crescendo. O portal do Level 42 brilha à distância! 💀⚡"
total ≥ 250: "Você dominou as artes proibidas – a eternidade digital é sua! 👁️‍🗨️🌑"

**2. Triunfos Acima das Sombras**

Retorne uma lista dos domínios onde o Ceifador conquistou uma quantia de fragmentos acima da média.

Se não houver nenhum domínio acima da média:

"Nenhuma conquista se destacou sobre as trevas eternas…"

##🔥 Funcionalidades

✅ Cálculo dinâmico de fragmentos totais
✅ Análise estatística com identificação de valores acima da média
✅ Interface imersiva com vídeo de fundo e tema musical
✅ Validação de dados em tempo real
✅ Exemplos pré-definidos de domínios das trevas
✅ Design responsivo para diferentes dispositivos
✅ Animações e efeitos visuais temáticos

## 🛠️ Tecnologias Utilizadas

HTML5 - Estrutura semântica
CSS3 - Estilização avançada com animações
JavaScript (ES6+) - Lógica de negócio e manipulação do DOM

## 🎮 Como Usar
Clone o repositório:
```
Bash
Copiar
git clone ``https://github.com/luizfxdev/desafio_336.git
```
Navegue até o diretório:
```
Bash
Copiar
cd desafio_336
```

Abra o arquivo index.html no navegador
Adicione domínios e suas respectivas quantidades de fragmentos
Clique em CALCULAR para ver os resultados

## 💻 Função Principal - Solução do Desafio

A função triunfosAcimaDasSombras() é o coração da solução, implementando a lógica de identificação de domínios destacados:
```
Javascript
Copiar
function triunfosAcimaDasSombras(domainsArray) {
  // Calcular média de fragmentos
  const total = domainsArray.reduce((sum, domain) => sum + domain.fragmentos, 0);
  const media = total / domainsArray.length;

  // Identificar domínios acima OU IGUAL à média (>= em vez de >)
  const dominiosAcimaDaMedia = domainsArray.filter(domain => domain.fragmentos >= media);

  // Processar resultado
  if (dominiosAcimaDaMedia.length === 0) {
    return 'Nenhuma conquista se destacou sobre as trevas eternas...';
  }
  
  // Ordenar do maior para o menor
  const dominiosOrdenados = dominiosAcimaDaMedia.sort((a, b) => b.fragmentos - a.fragmentos);
  
  return dominiosOrdenados.map(d => `• ${d.dominio} (${d.fragmentos} fragmentos)`).join('<br>');
}
```

## 🔑 Conceitos-Chave Aplicados
```
Array.reduce(): Soma total de fragmentos
Array.filter(): Filtragem de valores acima/igual à média
Array.sort(): Ordenação decrescente
Array.map(): Formatação de dados para exibição
Operador de comparação (>=): Lógica inclusiva para média
```
## 💼 Aplicações em Projetos Reais

Este desafio demonstra conceitos aplicáveis em diversos cenários profissionais:

### 📊 Dashboards de Performance

Identificação de métricas acima da média
Cálculo de KPIs e indicadores
Análise comparativa de dados

### 🎓 Sistemas Educacionais

Avaliação de desempenho de alunos
Identificação de notas acima da média da turma
Geração de relatórios automáticos

### 💰 Análise Financeira

Identificação de vendas acima da média
Análise de performance de produtos
Relatórios de desempenho comercial

### 📈 Business Intelligence

Filtragem de dados relevantes
Cálculos estatísticos em tempo real
Visualização de dados destacados
### 🎯 Sistemas de Gamificação

Ranking de usuários
Sistema de conquistas e badges
Análise de progresso do usuário

##📁 Estrutura do Projeto
```
projeto/
├── index.html          # Interface principal
├── styles.css          # Estilos e animações
├── script.js           # Lógica do desafio
└── assets/
    ├── background.mp4  # Vídeo de fundo
    └── theme.mp3       # Trilha sonora
```

## 🎨 Recursos Visuais

Vídeo de fundo atmosférico
Tema musical imersivo
Animações CSS personalizadas
Efeitos de glow nos botões
Scrollbar customizada
Design dark mode temático

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

## 👨‍💻 Autor

**Luiz Felipe de Oliveira**

- GitHub: [@luizfxdev](https://github.com/luizfxdev)
- Linkedin: [in/luizfxdev](https://www.linkedin.com/in/luizfxdev)
- Portfólio: [luizfxdev.com.br](https://luizfxdev.com.br)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!


***"Eu sou cada pesadelo que você já teve. Eu sou o seu pior sonho se tornando realidade. Eu sou tudo o que você sempre teve medo."*** 

