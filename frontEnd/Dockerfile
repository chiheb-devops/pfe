FROM node:12

WORKDIR /app

COPY /frontEnd/package*.json ./
COPY /frontEnd/. .
RUN rm -rf node_modules/

RUN npm install


EXPOSE 4200

RUN npm run build

CMD ["npm", "start"]
