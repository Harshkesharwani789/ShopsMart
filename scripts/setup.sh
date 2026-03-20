#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Starting ShopSmart Setup (Idempotent)..."

# Ensure log and data directories exist
# Using mkdir -p makes this command idempotent
mkdir -p ./logs
mkdir -p ./data/uploads
mkdir -p ./data/db

# Install dependencies for client
echo "Installing client dependencies..."
cd client
npm install
cd ..

# Install dependencies for server
echo "Installing server dependencies..."
cd server
npm install
cd ..

echo "Idempotent setup completed successfully!"
