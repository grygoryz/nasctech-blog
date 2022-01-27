FROM node:16.13.1-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .

CMD ["npm", "run", "start:prod"]
