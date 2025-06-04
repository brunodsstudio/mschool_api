# Usa imagem oficial do Node.js
FROM node:18

# Cria diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./
COPY .env ./.envprod
COPY config/config.js ./config/config.js

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Expõe a porta da aplicação
EXPOSE 4001

# Comando para iniciar a aplicação
CMD ["npm", "start"]