# Use an official lightweight Node image.
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

RUN npm config set strict-ssl false
# Install production dependencies.
RUN npm install --only=production

# Copy the local code to the container
COPY . .

# Build your app
RUN npm run build

# Install a simple http server for serving static content
RUN npm install -g serve

# The command to run your app
CMD ["serve", "-s", "build"]
