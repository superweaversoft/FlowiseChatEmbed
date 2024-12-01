FROM node:20

COPY . .

RUN npm i -g pnpm
RUN pnpm i