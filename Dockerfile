# BUILDER
ARG ENV

FROM node:latest as build-stage

RUN npm install -g gulp
COPY package*.json ./
RUN npm install

COPY ./ .

RUN gulp -f gulp.build.js --env $ENV

# NGINX
FROM nginx as production-stage

COPY --from=build-stage /build .
COPY nginx.conf /etc/nginx/nginx.conf