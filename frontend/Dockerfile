# stage1
FROM node:14.13.1-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin/$PATH
COPY . /app

# ENV REACT_APP_baseAPIURL=http://localhost:31297

RUN yarn config set strict-ssl false
RUN yarn install
RUN yarn build

# stage 2
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
