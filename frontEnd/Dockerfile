FROM node:12

WORKDIR /app

COPY /frontEnd/package*.json ./


RUN npm install

COPY /frontEnd .

RUN npm run build

EXPOSE 4200

CMD ["npm", "start"]

