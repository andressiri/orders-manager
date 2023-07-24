FROM node:18.16.1-alpine as development

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173

FROM node:18.16.1-alpine as production

RUN npm install -g http-server

RUN npm install -g serve 

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY --from=development /usr/src/app/dist ./dist

CMD ["serve", "-s", "dist", "-p", "5173"]