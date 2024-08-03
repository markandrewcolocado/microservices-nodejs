# Specify a base image
FROM node:14-alpine

ENV CI=true
ENV WDS_SOCKET_PORT=0

# Specify application working directory
WORKDIR /app

# Install dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default start command
CMD ["npm", "start"]