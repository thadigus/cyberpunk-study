# Use official Node.js image with slim Debian base
FROM node:latest

# Install global packages if needed (optional)
RUN npm install -g npm

# Create app directory and set ownership
WORKDIR /code

# Expose dev server port
EXPOSE 5173

# Use a non-root user for better security
USER node

# Default running command to build and serve dev server
CMD npm install; npm run dev
