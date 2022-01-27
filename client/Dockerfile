FROM node:16.13.1-alpine as build
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci
COPY . /app
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
