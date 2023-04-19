FROM node:18.16.0-alpine

WORKDIR /app

ADD package.json ./
ADD package-lock.json ./

ADD . .

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]
