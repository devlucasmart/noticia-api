# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy all files and directories from the current directory to the container
COPY . /app

# Install any needed packages specified in package.json
RUN npm install

# Install nodemon as a development dependency
RUN npm install nodemon --save

# Make port 8080 available to the world outside the container
EXPOSE 8080

# Run nodemon app when the container starts
CMD [ "nodemon", "app.js" ]