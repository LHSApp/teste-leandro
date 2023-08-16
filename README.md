
## Documentação

[Documentação](https://link-da-documentação)



Nome do Projeto
Este é um site de uma agência de viagens chamada "My Log Travels".

Descrição
O site conta com as seguintes seções:

Cabeçalho
Barra de navegação com links para Home, Guias, Voos, Sobre
Seção Inicial
Título, subtítulo e botão de reserva
Seção com 3 Colunas
3 colunas com imagem, texto e título
Seção Imagem e Texto
Imagem grande à direita e texto à esquerda
Seção Depoimentos
Título da seção
Carrossel de depoimentos
Rodapé
Logo e links rápidos
4 colunas com links
Direitos autorais
Tecnologias Utilizadas
HTML
CSS
JavaScript
Bootstrap
Fontes do Google Fonts
Como rodar o projeto

Pull requests são bem vindos! Para maiores mudanças, por favor abra uma issue primeiro para discutirmos o que você gostaria de mudar.


Esse README apresenta de forma sucinta as principais informações e tecnologias envolvidas no projeto. Pode ser expandido com mais detalhes e informações relevantes.




## Autores

- [@LHSApp](https://github.com/LHSApp)


## Licença

[MIT](https://choosealicense.com/licenses/mit/)


## Instalação

Clonar repositório
Abrir o arquivo index.html no navegador

Se preferir rodar com a extensão do VS Code Go Live.

Compile o CSS: npm run sass.

O comando npm run sass irá compilar o SCSS para um arquivo style.css que pode ser incluído no HTML.
```
    
## Documentação da API

Retorna todos os depoimentos

GET /depoimentos

Não requer nenhum parâmetro ou autenticação.

Retorna um depoimento
Copy code

GET /depoimentos/${id}
Parâmetro	Tipo	Descrição
id	number	Obrigatório. O ID do depoimento que deseja obter.
Exemplo de resposta
A resposta é um array com objetos de depoimento com a seguinte estrutura:

json

[
  {
    "avatar": "https://example.com/avatar.jpg", 
    "name": "João da Silva",
    "depoimento": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    "avatar": "https://example.com/avatar2.jpg",
    "name": "Maria Souza", 
    "depoimento": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }
]
Tecnologias
mockapi.io/ para criar e hospedar o endpoint
Faker.js para gerar dados aleatórios realísticos
Limitações
Por ser um endpoint mockado, existem algumas limitações:

Dados estáticos e aleatórios
Requer conexão com a internet
Limitado às funcionalidades do mockapi.io


## Screenshots



