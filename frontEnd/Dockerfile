FROM node:12

WORKDIR /app

COPY /frontEnd .

RUN npm install

RUN npm run build

EXPOSE 4200

CMD ["npm", "start"]

