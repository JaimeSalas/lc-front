FROM  node:alpine3.12 as builder

WORKDIR /usr/src/app

COPY . . 

RUN npm i --only=production

CMD [ "npm", "start" ]

