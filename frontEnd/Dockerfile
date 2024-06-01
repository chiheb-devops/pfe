FROM node:12.11.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 4200

CMD ["npm", "start"]
