FROM node:14.13.1-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app

RUN yarn config set strict-ssl false
RUN yarn install
RUN yarn build

ENV PORT 80
ENV DB_ADDR mongo-db
ENV DB_PORT 27017

CMD ["yarn", "start"]