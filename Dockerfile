FROM node:latest

RUN mkdir -p /source/app

WORKDIR /source/app

COPY . /source/app

RUN npm install

EXPOSE 8000

CMD [ "npm", "start" ]
