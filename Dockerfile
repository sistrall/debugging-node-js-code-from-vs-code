FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000 
EXPOSE 9339

CMD [ "node", "--inspect=0.0.0.0:9339", "src/example-5/index.js" ]