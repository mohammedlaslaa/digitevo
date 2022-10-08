# pull official base image
FROM node:16.13.1-alpine as build-app

# set working directory
WORKDIR /usr/src/app

# install app dependencies
COPY package.json yarn.lock ./
COPY  . ./
RUN yarn install --silent
RUN yarn run build

EXPOSE 3000

CMD ["yarn", "start"]