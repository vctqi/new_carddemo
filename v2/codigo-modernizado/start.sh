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

# Clean up any existing containers and volumes for a fresh start
echo "Cleaning up existing containers..."
docker compose down --volumes --remove-orphans

# Prune unused Docker resources to free up space
echo "Pruning unused Docker resources..."
docker system prune -f

# Create a simpler configuration for the first run
echo "Creating simplified service configuration for initial test..."
cat > docker-compose.test.yml << 'EOF'
services:
  postgres:
    image: postgres:14-alpine
    container_name: carddemo-postgres-test
    environment:
      POSTGRES_USER: carddemo
      POSTGRES_PASSWORD: carddemo123
      POSTGRES_DB: carddemo
EOF

# Validate the main docker-compose.yml file
echo "Validating docker-compose.yml file..."
if ! docker compose config > /dev/null; then
    echo "Error: Your docker-compose.yml file has syntax errors."
    echo "Please fix the errors and try again."
    exit 1
fi

# Test Docker connectivity with a simple container
echo "Testing Docker connectivity with a simple container..."
if ! docker compose -f docker-compose.test.yml up -d; then
    echo "Error: Unable to start simple container. There may be connectivity issues with Docker Hub."
    echo "Please check your internet connection and Docker settings."
    docker compose -f docker-compose.test.yml down
    rm docker-compose.test.yml
    exit 1
fi

# If test was successful, clean up the test container
docker compose -f docker-compose.test.yml down
rm docker-compose.test.yml

echo "Docker connectivity test passed."

# Start the services with a simpler approach
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