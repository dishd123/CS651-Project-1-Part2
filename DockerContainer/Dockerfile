# Build the React entry points, then serve the complete static site with Apache.
FROM node:20-alpine AS frontend-build
WORKDIR /build
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM httpd:2.4-alpine
COPY DockerContainer/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY --from=frontend-build /build/dist/ /usr/local/apache2/htdocs/
EXPOSE 80
