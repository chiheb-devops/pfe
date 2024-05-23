FROM node:12

WORKDIR /app

COPY /frontEnd/package*.json ./

RUN npm install -g @angular/cli@10.0.3

RUN npm install

COPY /frontEnd/. .

EXPOSE 4200

CMD ["npm", "start"]
