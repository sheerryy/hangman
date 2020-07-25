FROM node:10-alpine
WORKDIR /usr/src/app

COPY package.json ./

COPY . .

RUN yarn


# Command to reconcile data for dictionary (OPTIONAL)
RUN yarn start:data-reconciler

EXPOSE 3001

CMD ["yarn", "start"]