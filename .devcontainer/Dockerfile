# Use official Node.js image with slim Debian base
FROM node:20-slim

# Install global packages if needed (optional)
RUN npm install -g npm@10.9.3

# Create app directory and set ownership
RUN mkdir -p /workspace
WORKDIR /workspace

# Expose dev server port
EXPOSE 5173

# Use a non-root user for better security
USER node
