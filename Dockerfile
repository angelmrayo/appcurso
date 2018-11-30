FROM node:8
# Defino la carpeta de trabajo
WORKDIR /usr/src/app
# Copio el fichero de paquetes
COPY package.json ./

RUN npm install

COPY . . 

EXPOSE 8080

CMD ["npm", "start"]

