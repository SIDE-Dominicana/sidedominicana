#!/bin/bash

# Configuration
DOCKER_HUB_IMAGE_NAME="251020/sidedominicana"
IMAGE_NAME="sidedominicana"
TAG="1.2"

# Function to ask for user confirmation
ask_confirmation() {
  read -p "$1 (y/n): " confirm
  if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
    echo "Action skipped."
    return 1
  fi
  return 0
}

# Stop and remove existing container
ask_confirmation "Stop and remove existing container?"
if [ $? -eq 0 ]; then
  echo "Stopping and removing existing container..."
  docker-compose down || true
fi

# Build Docker image with version and tag "latest"
ask_confirmation "Build Docker image?"
if [ $? -eq 0 ]; then
  echo "Building Docker image with tag $TAG..."
  docker build -t $IMAGE_NAME:$TAG .
fi

# Run new container
ask_confirmation "Run new container?"
if [ $? -eq 0 ]; then
  echo "Running new container..."
  docker-compose up -d
fi

# Push image to Docker Hub
ask_confirmation "Push image to Docker Hub?"
if [ $? -eq 0 ]; then
  echo "Pushing image to Docker Hub..."
  docker tag $IMAGE_NAME:$TAG $DOCKER_HUB_IMAGE_NAME:$TAG 
  docker login
  docker push $DOCKER_HUB_IMAGE_NAME:$TAG
fi

# Deployment complete
echo "Deployment complete!"
