FROM node:8.7

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install --production

EXPOSE 9000
CMD [ "npm", "start" ]
