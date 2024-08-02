# Specify a base image
FROM node:14-alpine

# Specify application working directory
WORKDIR /app

# Install dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default start command
CMD ["npm", "start"]