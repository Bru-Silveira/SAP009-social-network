# Criando uma Rede Social

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Students 2 Students](#2-students-2-students)
* [3. Histórias de Usuário](#3-histórias-de-usuário)
* [4. Protótipo de Baixa Fidelidade](#4-protótipo-de-baixa-fidelidade)
* [5. Protótipo de Alta Fidelidade](#5-protótipo-de-alta-fidelidade)
* [6. Resposividade](#6-responsividade)
* [7. Teste de Usabilidade](#7-teste-de-usabilidade)
* [8. Testes Unitários](#8-testes-unitários)
* [9. Considerações Técnicas](#9-considerações-técnicas)

***

## 1. Prefácio

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. As redes sociais
invadiram nossas vidas. Nós as amamos ou odiamos, e muitas pessoas não conseguem
viver sem elas.

![adem-ay-Tk9m_HP4rgQ-unsplash](https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg)

Há redes sociais de todo tipo para todos os tipos de interesse. Por exemplo: em
uma rodada de financiamento com investidores, foi apresentada uma rede social
para químicos onde os usuários podem publicar artigos a respeito de suas
pesquisas, comentar os artigos de seus colegas e filtrar artigos de acordo com
determinadas tags ou popularidade, mais recente ou mais comentado.

## 2. Students 2 Students
### 2.1 Definição de Produto
Neste projeto construímos uma Rede Social voltada para estudantes da Língua Inglesa interessados em praticar o idioma com outros estudantes, postando informações os mais variados assuntos, desde regras gramaticais à interesses pessoais.

![Students 2 Students Logo](https://github.com/marinacezario/SAP009-social-network/blob/main/src/img/logo-s2s-com-fundo.png)

Chegamos à definição final do produto através de pesquisa com usuários reais, que demonstraram interesse em um espaço de compartilhamento de conhecimentos e prática. Identificamos que a maioria dos interessados (40%) se encontravam na faixa etária dos 31 à 40 anos de idade, e com isso conseguimos definir a identidade visual da Students 2 Students - cores que representam tranquilidade e comunicação.
Também definimos o inglês como idioma padrão de toda a aplicação (com exceção da página inicial, que explica o produto para visitantes), visto que aproximadamente 50% dos usuários possuem nível de Inglês Intermediário.

## 3. Histórias de Usuário
### 3.1 História de Usuário 1
**Eu, como estudante de inglês, gostaria de me cadastrar e fazer login em uma rede social para trocar experiências com outros estudantes do idioma.**

Para atender ao primeiro usuário, definimos os seguintes critérios de aceitação:
- Página inicial explicativa.
- Header com direcionamento para a tela de login e de cadastro.
- Campos de preenchimento de dados.
- Mensagens de erro descritivas.
- Link para recuperação de senha.

![User Story 1](https://github.com/marinacezario/SAP009-social-network/blob/main/src/img/user-story-1.png)

### 3.2 História de Usuário 2
**Eu, como estudante de inglês, gostaria de logar na rede social Students 2 Students utilizando minha conta do Google, para me conectar com mais facilidade.**

Para o segundo usuário, os seguintes critérios de aceitação foram estabelecidos:
- Botão para login com google.
- Pop-up onde o usuário pode selecionar a conta do google que deseja utilizar.

![User Story 2](https://github.com/marinacezario/SAP009-social-network/blob/main/src/img/user-story-2.png)

### 3.3 História de Usuário 3
**Eu, como cadastrado no app s2s, gostaria de compartilhar textos em inglês com outras pessoas que também estão aprendendo o idioma para praticar a minha escrita.**

Os critérios de aceitação para a terceira história de usuário foram os seguintes:
- Tela da timeline.
- Campo para digitação de texto.
- Botão para compartilhar.

![User Story 3](https://github.com/marinacezario/SAP009-social-network/blob/main/src/img/user-story-3.png)

### 3.4 História de Usuário 4
**Eu, como cadastrado no app s2s, gostaria de visualizar postagens de outros usuários e curtir e descurti-las quando desejar para expressar o que é interessante para mim.**

O quarto usuário teve os seguintes critérios de aceitação atendidos:
- Timeline com posts de diversos usuários.
- Botão de curtir e descurtir.

![User Story 4](https://github.com/marinacezario/SAP009-social-network/blob/main/src/img/user-story-4.png)

### 3.5 História de Usuário 5
**Eu, como cadastrado no app s2s, gostaria de editar e excluir textos que eu postei para atualizá-los.**

Os seguintes critérios de aceitação foram atendidos para o quinto usuário:
- Botão para editar postagem.
- Caixa de texto editável.
- Botão para salvar edição.
- Botão para cancelar a edição.
- Botão para excluir postagem.
- Confirmação de exclusão.

![User Story 5](https://github.com/marinacezario/SAP009-social-network/blob/main/src/img/user-story-5.png)

## 4. Protótipo de Baixa Fidelidade
![Low Fidelity Prototype Home](https://github.com/marinacezario/SAP009-social-network/blob/main/src/img/low-fidelity-prototype-home.jpg)

Nos primeiros rascunhos, o Students 2 Students foi surgindo já bem parecido com o produto final. Prototipamos uma tela inicial com explicações sobre o objetivo do produto, tela de login e de cadastro com os campos necessários para o preenchimento das informações pessoais dos usuários.

![Low Fidelity Prototype Feed](https://github.com/marinacezario/SAP009-social-network/blob/main/src/img/low-fidelity-prototype-feed.jpeg)

Já a timeline não ficou tão bem definida inicialmente. Pensamos em criar comunidades, onde os usuários poderiam criar postagens sobre temas específicos. Porém, devido ao tempo estimado para a entrega do projeto, decidimos criar apenas uma timeline principal, que fica melhor definida com os protótipos de alta fidelidade.

## 5. Protótipo de Alta Fidelidade
![High Fidelity Prototype Home](https://github.com/marinacezario/SAP009-social-network/blob/main/src/img/high-fidelity-prototype-home.png)

Com o protótipo de alta fidelidade, a identidade visual da Students 2 Students se tornou visível. Poucas alterações foram feitas. 

![High Fidelity Prototype Feed](https://github.com/marinacezario/SAP009-social-network/blob/main/src/img/high-fidelity-prototype-feed.png)

E, como dito anteriormente, precisamos abrir mão do feed das comunidades para focar nos objetivos de aprendizagem e no prazo estimado para entrega. 

## 6. Responsividade
Todas as telas da nossa aplicação foram prototipadas e criadas a partir do conceito Mobile First, pensando primeiramente em telas de dispositivos móveis. Mais tarde, aplicamos a responsividade para telas de desktop, tornando a S2S adaptável para ser acessada em qualquer dispositivo.

## 7. Teste de Usabilidade
Realizamos testes de usabilidade com usuários reais para diagnosticar qualquer dificuldade ou erro que pudesse ser encontrada em nossa aplicação. Os seguintes problemas foram percebidos:

- Ao clicar no menu hamburguer, abre-se uma barra lateral. Porém, esta só se fecha ao clicar em um botão de fechar, mas não fecha quando clicamos em outros locais da tela.
- O header das telas de feed, FAQ e About Us não estão fixos. Assim, o usuário precisa rolar até o topo da tela para ter acesso ao menu.

## 8. Testes Unitários
Para este projeto, construímos os testes unitários necessários para cobrir 100% das branches, lines e functions. Nosso código passam em todos os testes.

## 9. Considerações Técnicas
### 9.1. Objetivos de aprendizagem

Com este projeto, os seguintes objetivos de aprendizagem foram atingidos:

### HTML

- [ ] **Uso de HTML semântico**

  <details><summary>Links</summary><p>

  * [HTML semântico](https://curriculum.laboratoria.la/pt/topics/html/02-html5/02-semantic-html)
  * [Semantics in HTML - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de seletores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/pt/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/pt_BR/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caixa (box model): borda, margem, preenchimento**

  <details><summary>Links</summary><p>

  * [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox em CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#pt-br)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

- [ ] **Uso de CSS Grid Layout**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Grid - CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * [Grids - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
</p></details>

### Web APIs

- [ ] **Uso de seletores de DOM**

  <details><summary>Links</summary><p>

  * [Modificando o DOM](https://curriculum.laboratoria.la/pt/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introdução ao DOM - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
  * [Locating DOM elements using selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manipulação de eventos de DOM (listeners, propagação, delegação)**

  <details><summary>Links</summary><p>

  * [Introdução a eventos - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/removeEventListener)
  * [Objeto Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
</p></details>

- [ ] **Manipulação dinâmica de DOM**

  <details><summary>Links</summary><p>

  * [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
</p></details>

- [ ] **Routing (History API, evento hashchange, window.location)**

  <details><summary>Links</summary><p>

  * [Manipulando o histórico do navegador - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API)
</p></details>

### JavaScript

- [ ] **Arrays (arranjos)**

  <details><summary>Links</summary><p>

  * [Arranjos](https://curriculum.laboratoria.la/pt/topics/javascript/04-arrays)
  * [Array - MDN](https://developer.mozilla.org//pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos em JavaScript](https://curriculum.laboratoria.la/pt/topics/javascript/05-objects/01-objects)
</p></details>

- [ ] **Diferenciar entre tipos de dados primitivos e não primitivos**

- [ ] **Variáveis (declaração, atribuição, escopo)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de dados e operadores](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variáveis](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/02-variables)
</p></details>

- [ ] **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estruturas condicionais e repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisões no seu código — condicionais - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de laços (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Laços (Loops)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/02-loops)
  * [Laços e iterações - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funções (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funções (controle de fluxo)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/03-functions)
  * [Funções clássicas](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/02-arrow)
  * [Funções — blocos reutilizáveis de código - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Testes unitários (unit tests)**

  <details><summary>Links</summary><p>

  * [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
</p></details>

- [ ] **Testes assíncronos**

  <details><summary>Links</summary><p>

  * [Testando Código Assíncrono - Documentação oficial](https://jestjs.io/docs/pt-BR/asynchronous)
</p></details>

- [ ] **Uso de mocks e espiões**

  <details><summary>Links</summary><p>

  * [Simulações Manuais - Documentação oficial](https://jestjs.io/docs/pt-BR/manual-mocks)
</p></details>

- [ ] **Módulos de ECMAScript (ES modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura e Semântica)**

- [ ] **Diferença entre expressões (expressions) e declarações (statements)**

- [ ] **Callbacks**

  <details><summary>Links</summary><p>

  * [Função Callback - MDN](https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function)
</p></details>

- [ ] **Promessas**

  <details><summary>Links</summary><p>

  * [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [How to Write a JavaScript Promise - freecodecamp (em inglês)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
</p></details>

### Controle de Versões (Git e GitHub)

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

  <details><summary>Links</summary><p>

  * [Site oficial do GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**

- [ ] **GitHub: Organização pelo Github (projects | issues | labels | milestones | releases)**

### Centrado no usuário

- [ ] **Desenhar e desenvolver um produto ou serviço colocando as usuárias no centro**

### Design de produto

- [ ] **Criar protótipos para obter feedback e iterar**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

### Pesquisa

- [ ] **Planejar e executar testes de usabilidade**

### Firebase

- [ ] **Firebase Auth**

  <details><summary>Links</summary><p>

  * [Primeiros passos com o Firebase Authentication em sites - Documentação oficial](https://firebase.google.com/docs/auth/web/start?hl=pt-BR)
  * [Gerenciar usuários no Firebase (onAuthStateChanged) - Documentação oficial](https://firebase.google.com/docs/auth/web/manage-users?hl=pt-BR)
</p></details>

- [ ] **Firestore**

  <details><summary>Links</summary><p>

  * [Firestore - Documentação oficial](https://firebase.google.com/docs/firestore?hl=pt-BR)
  * [Regras de segurança do Firebase - Documentação oficial](https://firebase.google.com/docs/rules?hl=pt-BR)
  * [Receber atualizações em tempo real com o Cloud Firestore - Documentação oficial](https://firebase.google.com/docs/firestore/query-data/listen?hl=pt-BR)
</p></details>


* Este projeto deve ser desenvolvido em trios.

* O intervalo de tempo estimado para concluir o projeto é de 4 a 5 Sprints.

* A lógica do projeto deve estar implementada completamente em JavaScript
  (ES6+), HTML e CSS :smiley:. Para este projeto **não está permitido** o uso de
  _frameworks_ ou bibliotecas de CSS e JS.

* A divisão e organização do trabalho deve permitir, sem exceção, que **cada
  integrante** da equipe pratique a aprendizagem de tudo que está envolvido em
  **cada história**. _Não dividam o trabalho como em uma fábrica._

* Está avançando em seus projetos com alguma fluidez e sem grandes problemas?
  Seja generosa com suas parceiras, deixe-as aprender e praticar sem restrições,
  mesmo que demore um pouco mais. Aproveite para _mentorá-las_, para fazer _pair
  programming_. Uma das melhores formas de aprender é explicar verbalmente.

* Está sentindo dificuldade e para você é mais difícil de avançar? Não fique com
  as partes "fáceis" do projeto. Converse, negocie, busque sua oportunidade de
  praticar e aprender o que é mais difícil para você.

* Vocês apenas poderão trabalhar em uma história por vez. Não avancem para a
  próxima sem completar a anterior. As histórias apenas são concluídas quando se
  completam **todos** os critérios de aceitação + **toda** sua definição de
  pronto.

Para começar, você precisará criar um _fork_ e _clone_ deste repositório.

### Boilerplate

Para este projeto, definimos a estrutura de pastas e escrevemos nossos próprios testes unitários (_tests_). Para
isso, nos guiamos por meio de projetos anteriores.

Neste projeto utilizamos uma ferramenta chamada [Vite](https://vitejs.dev/) para empacotar nossos módulos e iniciar
o servidor de desenvolvimento, que disponibiliza nossos arquivos usando
a estratégia `Hot Module Replacement` [(HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement),
isso significa que quando fazemos alterações em arquivos que estão sendo hosteados, o navegador será atualizado automaticamente sem a necessidade
de fazê-lo manualmente para recarregar todo o site. Tivemos um
cuidado especial para não ter nenhuma _dependência circular_ no código já
[que pode causar problemas com o HMR](https://vitejs.dev/guide/troubleshooting.html#full-refresh-occurs-instead-of-hmr).
(O `eslint-plugin-import` tem a regra
[import/no-cycle](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md)
que notificará se os tiver.)


#### Criação e login de conta de usuário

* _Login_ com Firebase:
  - Para o _login_ e postagens na timeline, usamos o
    [Firebase](https://firebase.google.com/products/database/)
  - O usuário pode criar uma conta de acesso ou autenticar-se com conta de
    e-mail e senha e também com uma conta do Google.
* Validações:
  - Somente usuários com contas válidas têm acesso permitido.
  - Não háusuários repetidos.
  - O que o usuário digita no campo de senha (_input_) é secreto.
* Comportamento:
  - Quando o formulário de registro é enviado, ele é validado.
  - Quando ocorrem erros, mensagens descritivas são exibidas para ajudar o
    usuário.

#### Timeline/linha do tempo

* Validações:
  - Ao publicar, é validado se há conteúdo no _input_.
* Comportamento:
  - Ao recarregar o aplicativo, é verificado se o usuário está _logado_ antes de exibir o conteúdo,
  - É possível publicar um _post_.
  - É possível dar e remover _likes_ em uma publicação. Máximo de um por usuário.
  - Visualizar contagem de _likes_.
  - Pode excluir uma postagem específica.
  - Solicita confirmação antes de excluir um _post_.
  - Ao clicar em editar um _post_, o texto é alterado para um _input_ que
    permite editar o texto e salvar as alterações.
  - Ao salvar as alterações, volta ao texto normal, mas com a
    informação editada.
  - Ao recarregar a página, pode-se ver os textos editados.

### 9.2 Considerações técnicas sobre front-end

* A manipulação do DOM está separada da lógica (separação de responsabilidades).
* Há várias telas. Para isso, nosso aplicativo é um [Single Page
  Application
  (SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica)
* Alterar e persistir dados. Os dados que você adiciona ou modifica persistem por todo o aplicativo. 
Utilizamos o [Firebase](https://firebase.google.com/) para isso também.


