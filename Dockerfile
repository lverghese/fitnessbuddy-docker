FROM node:alpine

ENV DB_NAME=fitness_buddy_db \
    DB_USER=root \
    DB_PW=Cena2022!

WORKDIR /usr/dockerapp

COPY . .

RUN npm install

CMD [ "npm", "start" ]

