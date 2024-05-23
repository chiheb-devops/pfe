FROM node:12

WORKDIR /app

COPY /frontEnd/package*.json ./

RUN rm -rf node_modules/

RUN npm install

COPY /frontEnd/. .

EXPOSE 4200

RUN npm run build

CMD ["npm", "start"]
