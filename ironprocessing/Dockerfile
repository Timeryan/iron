FROM node:16.14.0 as builder
WORKDIR /app
COPY ironprocessing /app/
RUN npm install
RUN npm run buildProd

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY iron.crt /etc/nginx/iron.crt
COPY iron.key /etc/nginx/iron.key
COPY ironprocessing/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/ironprocessing /usr/share/nginx/html
