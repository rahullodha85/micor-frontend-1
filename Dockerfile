FROM tiangolo/node-frontend as build-stage

WORKDIR /app

COPY package.json /app/

RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/build/ /usr/share/nginx/html