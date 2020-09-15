# BUILDER
FROM node:latest as build-stage

RUN npm install -g gulp
COPY package*.json ./
RUN npm install

COPY ./ .

ARG ENV
RUN echo $ENV

RUN gulp -f gulp.build.js --env $ENV

# NGINX
FROM nginx as production-stage

COPY --from=build-stage /build .
COPY nginx.conf /etc/nginx/nginx.conf