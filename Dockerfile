# build stage
# 單純用 node:18 會發生問題
# https://github.com/nodejs/node/issues/43064
# Making explicit to use image node:18-bullseye instead of node:18 (which defaults to node:18-bookworm)
FROM node:18-bullseye as build-stage
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]