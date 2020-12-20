FROM  node:alpine3.12

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY . . 

RUN npm i --only=production

CMD [ "bash", "/usr/src/app/startup.sh" ]

