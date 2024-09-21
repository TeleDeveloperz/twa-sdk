FROM node:16
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app
RUN yarn build
CMD ["node", "dist/index.js"]
