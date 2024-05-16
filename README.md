# Projeto de Página de Cadastro e Exposição de Notícias

Este é um projeto de página web desenvolvido utilizando o framework Express, um banco de dados MySQL 5.7 e a linguagem JavaScript. O objetivo principal deste projeto é fornecer uma plataforma para cadastro e exposição de notícias.

## Tecnologias Utilizadas

- **Express**: Um framework web para Node.js que fornece um conjunto de recursos robustos para desenvolver aplicativos web e APIs.
- **MySQL 5.7**: Um sistema de gerenciamento de banco de dados relacional que utiliza a linguagem SQL para consultas.
- **JavaScript**: A linguagem de programação principal utilizada tanto no lado do cliente quanto no servidor para criar interatividade e lógica de aplicativos web.

## Funcionalidades

- **Cadastro de Notícias**: Os usuários podem cadastrar novas notícias fornecendo informações como título, conteúdo e data de publicação.
- **Exposição de Notícias**: As notícias cadastradas são exibidas na página principal, permitindo que os usuários visualizem as últimas informações.
- **Gerenciamento de Notícias**: Os administradores podem ter acesso a um painel de controle para gerenciar (editar, excluir) as notícias cadastradas.

## Instalação e Configuração

1. **Clone o Repositório**: Faça uma cópia do repositório para sua máquina local utilizando o comando `git clone`.
2. **Instale as Dependências**: Navegue até o diretório do projeto e execute `npm install` para instalar todas as dependências listadas no arquivo `package.json`.
3. **Configuração do Banco de Dados**: Configure as informações de conexão com o banco de dados MySQL no arquivo `/config/dbConnection.js`.
4. **Executar o Servidor**: Inicie o servidor executando `nodemon app.js`.
5. **Acesse a Página Web**: Abra um navegador e acesse `http://localhost:3000` para visualizar a página de cadastro e exposição de notícias.

## Contribuindo

Contribuições são bem-vindas! Se você quiser melhorar este projeto, sinta-se à vontade para enviar um pull request.
