# URL Shortener - Front end

Essa é uma aplicação Front end para utilizar a API URL Shortener. Ela foi desenvolvida utilizando React e com o Create React App.

## Como utilizar

- Precisa do Nodejs instalado
- No diretório do projeto, execute o comando abaixo para instalar todas as dependências

```shell
npm install
```

ou

```shell
yarn
```

- Informe as variáveis de ambiente no arquivo .env.development.local na raiz do projeto.
- Execute o comando abaixo para iniciar o servidor

```shell
npm start
```

ou

```shell
yarn start
```

## Variáveis de ambiente

Nesta aplicaçaõ são utilizadas algumas variáveis de ambiente:

```shell
REACT_APP_HOST=https://site-que-hospeda-a-aplicação.com
REACT_APP_HOST_DEVELOPMENT=http://localhost:porta-que-a-api-esta-utilizando
```

## Estrutura do projeto

### Pages

O diretório de páginas possui tanto os arquivos em javascript quanto a estilização em css.

#### SignUp page

Essa página é conectada com o endpoint de cadastro, quando o cadastro é bem sucedido, aparece um link para o usuário ir para a página de login.

#### Login page

Essa página é conectada com o endpoint de login e de autenticação, quando o login é bem sucedido, o usuário é redirecionado para a página de dashboard. Se o token armazenado no local storage ainda for válido, o usário não precisa fazer o login novamente, ele é redirecionado para a página de dashboard.

#### Dashboard page

O usuário só pode acessar os recursos dessa página se ele estiver autorizado, se não aparace um link para ele ir para a página de login. Se ele estiver autorizado, irão ser disponibilizados para ele um formulário para o cadastro da URL e todas as URLs que ele já tem cadastradas.

Essa página está conectada com os endpoints de adicionar nova URL, buscar todas as URLs e de autenticação.

### Components

Foi criado um componente de card que ficam contidas as URls do usuário, esse conteúdo é repetido pelo número de URLs que o usuário tem cadastrado, por isso a motivação da criação desse componente.

### Services

Nessa pasta estão localizadas as configurações da API utilizada no Front end.