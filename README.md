# Blog App - Sistema CRUD em React Native

Este é um aplicativo de blog desenvolvido em **React Native** com funcionalidades de **CRUD** (Criar, Ler, Atualizar, Deletar). Ele utiliza a **Context API** do React para o gerenciamento de estado global, permitindo que os usuários gerenciem postagens de blog diretamente no aplicativo. Atualmente, o estado é mantido apenas na memória (sem persistência).

---

## ✨ Funcionalidades

- **Criar**: Adicione novas postagens ao blog.
- **Ler**: Veja a lista de todas as postagens.
- **Atualizar**: Edite postagens existentes.
- **Deletar**: Exclua postagens desnecessárias.

---

## 🚀 Tecnologias Utilizadas

- **React Native**: Framework principal para o desenvolvimento do aplicativo.
- **React Navigation**: Para navegação entre telas.
- **Context API**: Para gerenciamento de estado global.

---

## 🛠️ Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter instalado:

1. **Node.js** e **npm** ou **yarn**.
2. **React Native CLI** (ou Expo CLI, se aplicável).
3. Emulador Android/iOS ou dispositivo físico configurado.

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/MatheusRodrigues10/crudBlog-ReactNative.git
   cd crudBlog-ReactNative
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute o projeto:
   ```bash
   npx react-native run-android  # Para Android
   npx react-native run-ios      # Para iOS
   ```

4. O aplicativo estará disponível no emulador ou dispositivo físico.

---

## 📁 Estrutura do Projeto

```plaintext
src/
├── components/         # Componentes reutilizáveis
├── screens/            # Telas do aplicativo (Home, Edit, Add, etc.)
├── context/            # Configuração da Context API
│   ├── BlogContext.js  # Provedor e gerenciador de estado global
├── App.js              # Ponto de entrada principal
```

---

## 🌟 Funcionalidades CRUD

### Criar Postagens
Na tela inicial o ícone de + leva para a tela de adição, onde é possível poder preencher o título e o conteúdo da postagem e salvá-la clicando no botão **Salvar**.

### Ler Postagens
A tela inicial exibe uma lista de todas as postagens disponíveis no estado, ao clicar é possível visualizar.

### Atualizar Postagens
Clique em uma postagem na lista para navegar para a tela de exibição, onde é possível atualizar o título e o conteúdo usando o ícone de lápis.

### Deletar Postagens
Na tela principal, é possível excluir uma postagem clicando no ícone de lixeira.

---

## ⚠️ Limitações Atuais

- **Sem Persistência**: Todas as postagens estão armazenadas apenas na memória. Isso significa que os dados serão perdidos ao reiniciar o aplicativo.

---

## 📞 Contato

Se você tiver dúvidas ou sugestões, entre em contato:

- **Email**: MatheusUnkamed@gmail.com
