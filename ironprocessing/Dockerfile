FROM node:latest as node
WORKDIR /app
COPY ironprocessing /app/
RUN npm install
RUN npm run buildProd

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY ironprocessing/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/ironprocessing /usr/share/nginx/html
