FROM node:22

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["node", "dist/server.js"]
