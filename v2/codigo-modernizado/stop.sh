#!/bin/bash

# CardDemo Application Shutdown Script

echo "Stopping CardDemo Application..."

# Navigate to the application directory
cd "$(dirname "$0")"

# Stop the services with a more thorough cleanup
echo "Stopping services with Docker Compose..."
docker compose down --volumes --remove-orphans

# Check if services stopped successfully
if [ $? -eq 0 ]; then
    echo "CardDemo services stopped successfully."
    
    # Additional cleanup to ensure no lingering containers
    echo "Checking for any remaining containers..."
    if docker ps -a | grep carddemo > /dev/null; then
        echo "Found remaining containers. Forcing cleanup..."
        docker ps -a | grep carddemo | awk '{print $1}' | xargs -r docker rm -f
    else
        echo "No remaining containers found."
    fi
    
    echo "All services have been stopped and cleaned up."
else
    echo "Failed to stop CardDemo services cleanly. Some containers may still be running."
    echo "You can force stop with 'docker compose down -v' if needed."
    exit 1
fi