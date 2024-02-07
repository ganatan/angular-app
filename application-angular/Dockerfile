FROM node:20.10

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

RUN rm -rf node_modules

EXPOSE 4000

CMD ["node", "dist/angular-starter/server/server.mjs"]
