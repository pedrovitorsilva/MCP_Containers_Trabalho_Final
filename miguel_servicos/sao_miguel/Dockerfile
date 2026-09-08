# Imagem Node.js base, compartilhada pelos 3 microsservicos.
#
# As dependencias sao instaladas na RAIZ (/node_modules) e nao em /servico.
# Isso e proposital: o docker-compose monta ./produtos, ./pessoas e ./vendas
# em /servico via "volumes", o que apagaria um /servico/node_modules.
# Como o Node procura node_modules subindo na arvore de diretorios,
# /servico/server.js encontra os pacotes em /node_modules normalmente.

FROM node:20-alpine

WORKDIR /
COPY package.json /package.json
RUN npm install --omit=dev

RUN mkdir -p /servico
WORKDIR /servico

EXPOSE 8000

CMD ["node", "server.js"]
