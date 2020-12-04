# Resize and Convert Images

## Projeto
Este projeto teve como iniciativa o uso constante de ferramentas online para mudança de formato e tamanho de imagens. Com este objetivo em mente, foi criado usando tecnologias como NodeJs, este projeto, para simplificação deste trabalho.

## Tecnologias
Este projeto foi feito utilizando as tecnologias subsequentes:
* Node
* Sharp (módulo do Node responsável por tratar as imagens)

## Como utilizar
### Instalação

```bash
# Clone this repository
$ git clone https://github.com/eliezersamuel/resize-images.git

# Go into the repository
$ cd resize-images/

# Install dependencies
$ yarn install

# Start server
$ node resize.js ARQUIVO --size=TAMANHO --format=FORMATO

```
- ARQUIVO = caminho até o arquivo que deseja modificar
- TAMANHO = Width que deseja que fique, pode ser varios tamanhos separados por vírgulas
- FORMATO = formato dos arquivos finais, como png, webp etc
