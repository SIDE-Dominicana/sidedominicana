#!/bin/bash

set -e  # Exit immediately on error

# Configuration
DOCKER_HUB_IMAGE_NAME="251020/sidedominicana"
IMAGE_NAME="sidedominicana"
TAG="1.3"
CLIENT_DIR="client-admin"

# Color functions
info() { echo -e "\033[1;34m[INFO]\033[0m $1"; }
success() { echo -e "\033[1;32m[SUCCESS]\033[0m $1"; }
warn() { echo -e "\033[1;33m[WARNING]\033[0m $1"; }
error() { echo -e "\033[1;31m[ERROR]\033[0m $1"; }

# Confirm prompt
ask_confirmation() {
  read -p "$1 (y/n) [n]: " confirm
  confirm=${confirm,,} # to lowercase
  [[ "$confirm" == "y" || "$confirm" == "yes" ]]
}

# Check prerequisites
command -v npm >/dev/null 2>&1 || { error "npm not found."; exit 1; }
command -v docker >/dev/null 2>&1 || { error "docker not found."; exit 1; }

# Build frontend
info "Moving to $CLIENT_DIR directory..."
cd "$CLIENT_DIR"

info "Running client build..."
npm run build || { error "Client build failed."; exit 1; }

cd ..
success "Client build complete."

# Build Docker image
info "Building Docker image: $IMAGE_NAME:$TAG"
docker build -t "$IMAGE_NAME:$TAG" .
success "Docker image built successfully."

# Stop and remove existing container
if ask_confirmation "Stop and remove existing container?"; then
  info "Stopping and removing containers..."
  docker-compose down || true
  success "Containers removed."
fi

# Start container
if ask_confirmation "Run new container?"; then
  info "Starting containers..."
  docker-compose up -d
  success "Containers are running."
fi

# Push image to Docker Hub
if ask_confirmation "Push image to Docker Hub?"; then
  info "Tagging and pushing image to Docker Hub..."
  docker tag "$IMAGE_NAME:$TAG" "$DOCKER_HUB_IMAGE_NAME:$TAG"
  docker login
  docker push "$DOCKER_HUB_IMAGE_NAME:$TAG"
  success "Image pushed to Docker Hub."
fi

success "Deployment complete!"
