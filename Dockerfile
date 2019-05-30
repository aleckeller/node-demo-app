FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g mocha

RUN mocha -R spec tests/test.js

EXPOSE 8080
CMD [ "npm", "start" ]
