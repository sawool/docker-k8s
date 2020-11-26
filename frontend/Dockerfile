# stage1
FROM node:14.13.1-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin/$PATH
COPY . /app

RUN yarn config set strict-ssl false
RUN yarn install
RUN yarn build

# stage 2
FROM nginx:1.16.0-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
