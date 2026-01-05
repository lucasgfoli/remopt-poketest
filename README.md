## 💻 Sobre o projeto

App Mobile que realiza a busca de informações de pokemons via QR code.
A interface foi construída utilizando [Styled-Components](https://styled-components.com/docs/basics#installation), [React Native](https://reactnative.dev/docs/getting-started-without-a-framework) e Expo Go (Para execução e testes em dispositivos físicos).

## 💡 Funcionalidades e Conceitos Aplicados

* **Consumo de API REST:** Integração com a PokéAPI..
* **Gerenciamento de Estado Global:** Uso da Context API para compartilhar dados do Pokémon entre telas.
* **Navegação:** Implementação de rotas com React Navigation.
* **Estilização:** Uso de Styled Components para CSS-in-JS.
* **UX/UI:** Feedbacks visuais de carregamento (`ActivityIndicator`) e tratamento de erros com alertas nativos.
* **Tipagem Estática:** Código totalmente tipado com TypeScript para maior segurança.
* **Fontes Personalizadas:** Integração com Google Fonts (Poppins).

## 🚀 Como rodar o projeto

Este projeto foi desenvolvido com **Expo**. Para rodá-lo, você precisará ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

### Pré-requisitos

Antes de começar, você vai precisar preparar seu ambiente:

1.  **Node.js**: Certifique-se de ter o Node instalado.
2.  **Expo Go (Mobile)**: Instale o aplicativo **Expo Go** no seu celular (disponível na [App Store](https://apps.apple.com/us/app/expo-go/id982107779) ou [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)).
3.  **Emulador (Opcional)**: Se preferir rodar no PC, você precisará do Android Studio ou Xcode configurado.

### Passo a passo

Siga os comandos abaixo no seu terminal:

```bash
# 1. Clone o repositório
git clone https://github.com/lucasgfoli/remopt-poketest

# 2. Entre na pasta do projeto
cd nome-do-projeto

# 3. Instale as dependências
npm install
# ou, se estiver usando yarn:
# yarn install

# 4. Inicie o servidor do Expo
npx expo start