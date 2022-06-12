FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./dist ./dist
EXPOSE 3000
CMD ["node", "dist/server.js"]

