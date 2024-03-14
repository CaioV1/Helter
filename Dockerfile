FROM node:20 as build
WORKDIR /home/app

COPY . .

RUN npm install typescript vite@5.0.8 -g && npm install && npm run build

FROM nginx

COPY --from=build /home/app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /home/app/dist/* /usr/share/nginx/html/

EXPOSE 80