# Certificadora 1

<img src="src/Assets/github.png" alt="capa do projeto" />

<br>

Este projeto é composto pelo desenvolvimento de um sistema web com o objetivo de simplificar o agendamento e controle de minicursos e oficinas ofertados pelo projeto Meninas Digitais.

<br>

## 👨‍💻 Equipe (grupo 2)

- Gabriela Maria Lieira

- Gabrielle Avelino Saad do Bonfim

- Talita Aya Sakamoto Kuriki

<br>

## 🔑 Credenciais para login

Para acessar a área do administrador do sistema é necessário que o usuário realize seu login através da inserção de dados nos campos disponíveis: e-mail e senha. 
Assim, segue abaixo as credenciais criadas para que seja testado essa funcionalidade:

- E-mail: admin@meninasdigitais.com
- Senha: 123456

<br>

## 📑 Funcionalidades


1. Apresentação geral de todos os cards de minicursos e oficinas planejados, de modo que toda a comunidade interessada possa ter acesso;

      > O público poderá se inscrever no minicurso/oficina que desejar através de um formulário externo ao clicar no botão 'Inscrever-se'.

2. Tela Saiba Mais com detalhes do minicurso/oficina selecionado: descrição, data, hora, local, duração e certificação;

    > Essa tela pode ser acessada ao clicar no card de algum minicurso/oficina da Tela Home.

3. Área privada dos administradores (integrantes do projeto Meninas Digitais) que só poderá ser acessada com o e-mail e senha cadastrado;
    
    > Ao clicar no botão ‘Administrador’, o usuário será redirecionado a Tela de Login, esta que restringe o restante do sistema para que a comunidade externa não tenha acesso.

4. Tela com a apresentação geral e opções para o administrador cadastrar, visualizar, editar e excluir um minicurso/oficina;

    > Acessível se, e somente se, o usuário conseguir realizar o login para a área privada dos administradores.

<br>

## 💻 Desenvolvimento:

Para o desenvolvimento do sistema, optou-se por utilizar o framework [React JS](https://pt-br.legacy.reactjs.org), em sua versão mais recente 18.2.0, para a construção Front-end da aplicação, visando uma melhor experiência do usuário. 

Juntamente, utilizou-se da biblioteca [Material UI](https://mui.com) na versão 5.15.15, a qual oferece diferentes componentes que auxiliaram na construção das interfaces do sistema, com o [React Router Dom](https://reactrouter.com/en/main), na versão 6.23.0, para controle de rotas e desenvolvimento de uma aplicação padrão SPA (Single Page Application).

  

Para a lógica do projeto foi utilizado o BaaS (Backend As A Service) [Firebase](https://firebase.google.com/products-build?hl=pt) na versão 10.12.1, um modelo de serviço que oferece a infraestrutura e o back-end de uma aplicação de forma simplificada.

  

Já o progresso do projeto foi acompanhado através de uma [Planilha Gantt](https://blog.runrun.it/planilha-de-gantt/#:~:text=O%20gr%C3%A1fico%20de%20gantt%20%C3%A9,a%20produtividade%20da%20sua%20%C3%A1rea.), contendo os status de todas as tarefas pendentes, os responsáveis, datas de início e fim, bem como estregas parciais e finais. Este cronograma completo pode ser visualizado através deste [link](https://docs.google.com/spreadsheets/d/1ch29nuDN0-2P2YCQSGXyLf8QUYjbYn0F/edit?usp=sharing&ouid=112152257061659035144&rtpof=true&sd=true).


Por fim, todo o código foi escrito através da IDE (Integrated Development Environment, traduzido como Ambiente de Desenvolvimento Integrado) [Visual Studio Code](https://code.visualstudio.com) na versão 1.85.

  
<br>

## 🎨 Design:

A interface do projeto foi projetada utilizando a ferramenta [Figma](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwitvZDQr7mBAxUepZUCHXgoBgIQFnoECAcQAQ&url=https://www.figma.com/&usg=AOvVaw2ixWJnr7CgjXMg3QXfTz4u&opi=89978449), esta que permitiu criar um arquivo compartilhável e um protótipo do que seria desenvolvido, facilitando o entendimento geral, certificando que todos os requisitos e regras seriam seguidos e permitindo a estilização do sistema para uma interface amigável.

  

Deste modo, o design pode ser acessado através deste [link](https://www.figma.com/file/7ODflqzaYbwreyfpwY6Z5l/Certificadora-3?type=design&node-id=4%3A4320&mode=design&t=NyQIQHbHquTtdAI0-1).

  
  
<br>

## 📥 Instalação e execução

1. Clonar o projeto em seu próprio computador

```
//git clone <link do repositório>

git clone https://github.com/talita-aya/certificadora-3.git
```
2. Abrir a pasta do projeto em seu editor de código


3. Instalar todas as dependências do projeto

    3.1. Esta etapa pode ser feita no terminal do projeto

        Ex: No Visual Studio Code basta utilizar o atalho Ctrl + J

```
npm i

//ou

npm install
```

4. Executar o projeto

```
npm start
```


O sistema será aberto em uma nova página de seu navegador, sendo possível o uso da aplicação e suas funcionalidades.