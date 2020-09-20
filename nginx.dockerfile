FROM node:latest as build
LABEL author="J. Gabriel Maia"
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
ARG env=prod
RUN npm run build

FROM nginx:alpine as publish
COPY --from=build /app/dist/customer-list /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/nginx.conf
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]