FROM node:20
WORKDIR /app
COPY . .
RUN cd frontend && npm install && npm run build
CMD ["npm", "start"]
