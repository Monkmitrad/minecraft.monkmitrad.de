FROM node As builder
RUN mkdir -p /app
WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install
COPY . /app
RUN npm run build --prod


FROM nginx
COPY --from=builder /app/dist/minecraft-monkmitrad /usr/share/nginx/html