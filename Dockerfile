FROM node:26-alpine3.23
WORKDIR /web
COPY . ./
RUN npm ci
ENTRYPOINT ["node", "server.js"]