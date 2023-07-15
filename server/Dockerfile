FROM node:18.16.1-alpine as development

RUN npm install -g nodemon

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

FROM node:18.16.1-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --only=production

COPY --from=development /usr/src/app/build ./build

CMD ["node", "build/index.js"]