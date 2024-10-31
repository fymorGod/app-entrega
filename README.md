# App Entrega 📦 | Potiguar

> **Projeto**: App para apresentação de rotas de entrega com base em romaneios.

> **Docs**: Para acessar os layouts do projeto, acesse a pasta docs como disposto abaixo.
```bash
    $ cd app-entrega/src/docs
```

Este projeto visa otimizar as entregas diárias ao fornecer uma interface prática e intuitiva para escanear romaneios, listar clientes e apresentar informações detalhadas de cada entrega, como status e endereço.

---

## Sumário
- [Etapas do Projeto](#etapas-do-projeto)
  - [1. Escaneia o Romaneio](#1-escaneia-o-romaneio)
  - [2. Busca de Dados](#2-busca-de-dados)
  - [3. Navegação para Tela de Clientes](#3-navegação-para-tela-de-clientes)
  - [4. Apresentação das Entregas do Dia](#4-apresentação-das-entregas-do-dia)
  - [5. Detalhes de Entrega](#5-detalhes-de-entrega)
  - [6. Informações de Venda](#6-informações-de-venda)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Documentação e Recursos](#documentação-e-recursos)

---

## Etapas do Projeto

### 1. Escaneia o Romaneio
O fluxo do app começa com a captura de um **romaneio** usando a câmera do dispositivo para escanear o código de barras. Com base no número escaneado, é feita a busca pelos dados de entregas.

### 2. Busca de Dados
O romaneio escaneado é utilizado para buscar informações detalhadas das entregas planejadas para o dia.

### 3. Navegação para Tela de Clientes
O app navega para a **Tela de Clientes**, onde são apresentadas todas as entregas do dia com seus respectivos dados.

### 4. Apresentação das Entregas do Dia
Cada entrega do romaneio é apresentada em uma lista detalhada:
  - **Dados exibidos**: Nome do cliente, bairro, e status de entrega.
  - **Ordem de listagem**: Todas as entregas estão organizadas por ordem de prioridade ou rota.
  
  Na **header** do app, estão presentes:
  - **Ícones de ação**: 
    - Voltar
    - Lista de Requisições
  - **Nome da Tela**: Mostra em qual tela o usuário se encontra.

#### 4.1 Informações Adicionais
Abaixo da header, são apresentados:
- **Número do Romaneio** 📄
- **Número do Veículo** 🚚
- **Ícone de Acesso** ao modal com dados da equipe de entrega.

### 5. Detalhes de Entrega
Ao clicar em qualquer **card de entrega**, o app navega para a tela de vendas correspondente.

### 6. Informações de Venda
Na **Tela de Vendas**, são exibidos os detalhes da venda do cliente selecionado, com dados completos para acompanhamento.

---

## Tecnologias Utilizadas
- **React Native**: Construção de interface nativa para Android e iOS.
- **Expo**: Gerenciamento e suporte para execução do app em dispositivos físicos.
- **React Navigation**: Navegação entre telas e organização da pilha de navegação.
- **React Hook Form**: Controle de formulários de maneira eficiente.
- **React Native Vector Icons**: Ícones comumente usados para melhorar a UI.
- **React Native Reanimated**: Animações fluidas e responsivas.
- **Linear Gradient (Expo)**: Criação de gradientes lineares para uma UI atrativa.
- **Expo Camera** e **Expo BarCode Scanner**: Acesso à câmera para captura de códigos de barras.

---

## Documentação e Recursos
Aqui estão os links de documentação úteis para as bibliotecas e componentes usados:

1. [Camera - Expo](https://docs.expo.dev/versions/latest/sdk/camera/)
2. [Bar Code Scanner - Expo](https://docs.expo.dev/versions/latest/sdk/bar-code-scanner/)
3. [React Native Vector Icons](https://oblador.github.io/react-native-vector-icons/)
4. [React Navigation](https://reactnavigation.org/docs/hello-react-navigation)
5. [Linear Gradient - Expo](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)
6. [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
7. [React Hook Form](https://www.react-hook-form.com/)

---

## Licença
Este projeto é desenvolvido para fins internos. Para mais informações sobre o uso e modificação, consulte as permissões específicas da empresa.

---

> **Nota**: Qualquer dúvida ou contribuição para o projeto deve ser discutida com o time de desenvolvimento.
