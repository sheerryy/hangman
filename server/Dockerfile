FROM node:10-alpine
WORKDIR /usr/src/app

COPY package.json ./

COPY . .

RUN yarn


# Command to reconcile data for dictionary (OPTIONAL)
RUN yarn start:data-reconciler

EXPOSE 3001

# Run the image as a non-root user (OPTIONAL)
RUN adduser -D user
USER user

# Heroku assihn $PORT Vaiable (This stage is required for heroku deployemnet only)
ENV PORT=$PORT

CMD ["yarn", "start"]