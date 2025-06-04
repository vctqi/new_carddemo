FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
# Create a simple HTML file for demo purposes
RUN echo '<html><head><title>CardDemo Frontend</title></head><body><h1>CardDemo Frontend</h1><p>This is a placeholder for the React frontend.</p></body></html>' > index.html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]