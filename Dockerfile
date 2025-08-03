FROM node:22.14-alpine

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY ./package*.json ./pnpm-lock.yaml* ./
RUN pnpm install

COPY . .

EXPOSE 5173

CMD [ "pnpm","run","start" ]