FROM node:12.11.1

WORKDIR /app

COPY /frontEnd/package*.json ./

RUN npm install

EXPOSE 4200

RUN npm run build

CMD ["npm", "start"]
