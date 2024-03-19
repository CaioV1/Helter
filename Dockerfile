FROM node:20
WORKDIR /home/app

COPY . .

RUN npm install typescript vite@5.0.8 -g && npm install && npm run build

EXPOSE 80

ENTRYPOINT ["npm", "run", "preview"]