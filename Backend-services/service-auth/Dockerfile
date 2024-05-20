FROM node:14

WORKDIR /app

COPY Backend-services/service-auth/package*.json ./

RUN npm install

COPY . .

EXPOSE 8090

CMD [ "node", "app.js" ]
