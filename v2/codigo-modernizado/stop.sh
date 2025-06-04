#!/bin/bash

# CardDemo Application Shutdown Script

echo "Stopping CardDemo Application..."

# Navigate to the application directory
cd "$(dirname "$0")"

# Stop the services
echo "Stopping services with Docker Compose..."
docker-compose down

# Check if services stopped successfully
if [ $? -eq 0 ]; then
    echo "CardDemo services stopped successfully."
else
    echo "Failed to stop CardDemo services cleanly. Some containers may still be running."
    echo "You can force stop with 'docker-compose down -v' if needed."
    exit 1
fi