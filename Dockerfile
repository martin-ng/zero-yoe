FROM node:9-slim
WORKDIR /server/index
COPY package.json ./server/index
RUN npm install
COPY . ./server/index
CMD ['npm', 'start']