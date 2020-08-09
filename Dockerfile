# BUILDER
FROM node:latest as build-stage

RUN npm install -g gulp
COPY package*.json ./
RUN npm install

COPY ./ .
# WORKDIR /src/

RUN gulp -f gulp.build.js

# NGINX
FROM nginx as production-stage

COPY --from=build-stage /build .
COPY nginx.conf /etc/nginx/nginx.conf