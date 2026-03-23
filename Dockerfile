FROM node:20-alpine AS builder

WORKDIR /kohli_angel_ui_garden

COPY package*.json ./

RUN npm install

COPY . .

ENV DISABLE_ESLINT_PLUGIN=true

RUN npm run build-storybook
 
FROM nginx:alpine

COPY --from=builder /kohli_angel_ui_garden/storybook-static /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]
 