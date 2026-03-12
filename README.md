# 🚀 Landing Page DNC School

Uma Landing Page responsiva desenvolvida para a DNC School com o objetivo de capturar leads (inscrições) para um curso gratuito de Introdução à Tecnologia. O projeto conta com seções informativas, vídeo embutido, um carrossel interativo de alunos e integração de formulário para planilha.

## 📸 Prévia do Projeto

Abaixo você pode conferir como ficou a interface final e os bastidores do código no VS Code:

![Preview do Site] blob:https://gemini.google.com/afc38aa0-09cc-41bb-818b-93494d5e8fa7
*Interface da Landing Page rodando no navegador.*

<details>
<summary><b>Ver imagens do Código Fonte (VS Code)</b></summary>
<br>

![Estrutura HTML](image_f2c989.png)
*Estrutura semântica no `index.html`.*

![Estilização CSS](image_f2c6d6.png)
*Configurações globais e variáveis no `style.css`.*

![Lógica JS](image_f2c699.png)
*Manipulação do DOM no `index.js`.*

</details>

## ✨ Funcionalidades

* **Design Responsivo:** Layout 100% adaptável para dispositivos móveis (`max-width: 425px`), tablets (`max-width: 1024px`) e desktops, utilizando Media Queries.
* **Carrossel de Alunos:** Exibição dinâmica de cards utilizando JavaScript puro para alternar a visibilidade dos elementos ao clicar nas setas.
* **Captura de Leads (Formulário):** Formulário de inscrição funcional integrado com a API do **SheetMonkey**. Os dados (Nome, E-mail, Telefone e Data) são enviados via método `POST` diretamente para uma planilha.
* **Mídia Integrada:** Player de vídeo do YouTube embutido via `iframe`.
* **Variáveis CSS:** Utilização de pseudo-classe `:root` para gerenciamento centralizado de cores e fontes, facilitando futuras manutenções.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Marcação semântica e estruturação.
* **CSS3:** Estilização avançada utilizando Flexbox e CSS Grid.
* **JavaScript (Vanilla):** Lógica front-end para o funcionamento do carrossel.
* **SheetMonkey API:** Ferramenta No-Code para recebimento dos dados do formulário.
* **Google Fonts:** Utilização das fontes *Inter* e *Poppins*.

## 🚀 Como rodar este projeto localmente

1. Faça o clone deste repositório ou baixe o código fonte.
2. Certifique-se de que a estrutura de pastas contém o diretório `img/` com todos os assets visuais (`logo.svg`, `background.svg`, `cardBruna.svg`, etc.) que foram referenciados no HTML e CSS.
3. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente no seu navegador.
4. **Dica:** Para uma melhor experiência de desenvolvimento, abra a pasta do projeto no VS Code e utilize a extensão **Live Server** para rodar a aplicação com recarregamento automático.

## 📂 Estrutura de Arquivos

\`\`\`text
📁 projeto-landing-page/
├── 📁 img/               # Pasta contendo todas as imagens e ícones (SVGs, etc.)
├── 📄 index.html         # Estrutura principal da aplicação
├── 📄 style.css          # Folhas de estilo global e responsividade
└── 📄 index.js           # Scripts de interação (Carrossel)
\`\`\`
