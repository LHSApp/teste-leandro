
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

<div align"center"><img src="https://github.com/LHSApp/teste-leandro/assets/48134318/b2f0c215-64e5-4d95-8e88-6d0f1cb98ca9"></div>
```


## Documentação da API

Retorna todos os depoimentos


GET /depoimentos
Não requer nenhum parâmetro ou autenticação.

Exemplo de resposta
A resposta é um array com objetos de depoimento com a seguinte estrutura:

json



[
  {
    "avatar": "https://random-avatar.com/image1.jpg",
    "name": "João Pereira Lima",
    "depoimento": "O serviço de vocês é excelente! Adorei as dicas personalizadas de viagem e a dedicação para encontrar as melhores opções com nosso orçamento. Super recomendo!"
  },
  {  
    "avatar": "https://random-avatar.com/image2.jpg", 
    "name": "Maria Antonia Souza",
    "depoimento": "Viajei para três países diferentes com as recomendações de vocês e todas as reservas correram super bem. O suporte 24h durante a viagem também foi muito útil quando tivemos um imprevisto. Nota 1000!"
  }
]
Tecnologias
mockapi.io para criar e hospedar o endpoint
Faker.js para gerar dados aleatórios realísticos
Limitações
Por ser um endpoint mockado, existem algumas limitações:

Dados estáticos e aleatórios
Requer conexão com a internet
Limitado às funcionalidades do mockapi.io
