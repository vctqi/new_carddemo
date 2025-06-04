#!/bin/bash

# CardDemo Application Startup Script

echo "Starting CardDemo Application..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker before continuing."
    exit 1
fi

# Navigate to the application directory
cd "$(dirname "$0")"

# Pull necessary base images first
echo "Pulling necessary base images..."
docker pull amazoncorretto:17-alpine
docker pull maven:3.9-amazoncorretto-17
docker pull nginx:stable-alpine
docker pull postgres:14-alpine
docker pull node:18-alpine

# Build the Docker images
echo "Building Docker images..."
docker compose build --no-cache

# Start the services
echo "Starting services with Docker Compose..."
docker compose up -d

# Check if services started successfully
if [ $? -eq 0 ]; then
    echo "CardDemo services started successfully."
    echo "The application is now running at http://localhost"
    echo "API documentation is available at http://localhost/api-docs"
    echo "To stop the application, run ./stop.sh"
else
    echo "Failed to start CardDemo services. Please check the logs with 'docker compose logs'."
    exit 1
fi