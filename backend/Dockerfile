FROM node:18.12.0-alpine

RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

WORKDIR /usr/src/node-app

COPY package.json yarn.lock ./
COPY tsconfig.json ./

USER node

RUN yarn install --pure-lockfile

COPY --chown=node:node . .

RUN yarn build


EXPOSE 8080

CMD ["yarn", "start"]

