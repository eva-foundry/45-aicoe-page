#!/bin/bash

# Fix script for Vite module resolution errors
# Run this if you encounter: "Cannot find module '/workspaces/spark-template/node_modules/vite/dist/node/chunks/dist.js'"

echo "🔧 Starting dependency repair..."

# Step 1: Remove corrupted node_modules
echo "📦 Removing node_modules..."
rm -rf node_modules

# Step 2: Remove package lock
echo "🔓 Removing package-lock.json..."
rm -rf package-lock.json

# Step 3: Remove workspace node_modules
echo "📦 Removing workspace node_modules..."
rm -rf packages/spark-tools/node_modules

# Step 4: Clean npm cache
echo "🧹 Cleaning npm cache..."
npm cache clean --force

# Step 5: Reinstall dependencies
echo "📥 Reinstalling dependencies..."
npm install

echo "✅ Dependencies repaired!"
echo ""
echo "Try running: npm run dev"
