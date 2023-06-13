FROM node:18.16.0 as build

#Setup project

WORKDIR /usr/local/app

RUN npm install -g pnpm@7.9.0

COPY ./src                  ./src
COPY ./angular.json          ./
COPY ./package.json         ./
COPY ./pnpm-lock.yaml       ./
COPY ./tsconfig.json        ./
COPY ./tsconfig.app.json    ./
COPY ./tsconfig.spec.json   ./

RUN pnpm install --ignore-scripts --frozen-lockfile
RUN pnpm build

# run app with nginx server
FROM nginx:latest

COPY --from=build /usr/local/app/dist/weather /usr/share/nginx/html

EXPOSE 80