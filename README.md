Projeto SCSS Modularizado
Este projeto consiste em um site desenvolvido com SCSS de forma modularizada, seguindo boas práticas de CSS.

Estrutura de pastas
src/scss/ - contém os arquivos SCSS separados por função
_variables.scss - variáveis globais
_mixins.scss - mixins reutilizáveis
_global.scss - estilos globais e resets
_components/ - pasta com componentes do site
_nav.scss
_buttons.scss
etc
main.scss - arquivo principal que importa todos os outros
index.html - página HTML do site
Instalação
Clone o repositório
Instale as dependências do SCSS: npm install
Compile o CSS: npm run css
Uso
O comando npm run css irá compilar o SCSS para um arquivo style.css que pode ser incluído no HTML.

Durante o desenvolvimento, execute npm run watch para compilar automaticamente a cada alteração nos arquivos SCSS.

Licença
MIT

Créditos
Estrutura baseada no artigo How to Structure a Sass Project.

Feito por Leandro Santos

Desta forma temos um README padrão explicando o projeto, como instalar e usar, licença e créditos. O README ajuda outros desenvolvedores a entenderem a estrutura do projeto mais rapidamente.
