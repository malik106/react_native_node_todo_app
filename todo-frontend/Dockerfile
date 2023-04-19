FROM node:16.13.0

WORKDIR /app

ADD package.json ./
ADD package-lock.json ./

ADD . .

RUN npm install

RUN npm install -g expo-cli

RUN npx expo install react-native-web@~0.18.10 @expo/webpack-config@^18.0.1

RUN expo --version

EXPOSE 19000 19001 19002 19006

CMD ["npm", "run", "web"]
