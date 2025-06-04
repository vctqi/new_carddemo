#!/bin/bash

# CardDemo Application Startup Script

echo "Starting CardDemo Application..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker before continuing."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "Docker Compose is not installed. Please install Docker Compose before continuing."
    exit 1
fi

# Navigate to the application directory
cd "$(dirname "$0")"

# Build the Docker images if needed
echo "Building Docker images..."
docker-compose build

# Start the services
echo "Starting services with Docker Compose..."
docker-compose up -d

# Check if services started successfully
if [ $? -eq 0 ]; then
    echo "CardDemo services started successfully."
    echo "The application is now running at http://localhost"
    echo "API documentation is available at http://localhost/api-docs"
    echo "To stop the application, run ./stop.sh"
else
    echo "Failed to start CardDemo services. Please check the logs with 'docker-compose logs'."
    exit 1
fi