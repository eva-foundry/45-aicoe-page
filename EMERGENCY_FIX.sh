#!/bin/bash

# EMERGENCY FIX - Run this immediately to fix Vite error
# Usage: bash EMERGENCY_FIX.sh

set -e

echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║                                                          ║"
echo "║       🚨 EMERGENCY FIX FOR VITE MODULE ERROR 🚨         ║"
echo "║                                                          ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""
echo "Error being fixed:"
echo "  Cannot find module '.../node_modules/vite/dist/node/chunks/dist.js'"
echo ""
echo "This will:"
echo "  1. Delete corrupted node_modules"
echo "  2. Delete package-lock.json"
echo "  3. Clear npm cache"
echo "  4. Reinstall all packages"
echo ""
read -p "Press ENTER to continue or Ctrl+C to cancel..."
echo ""

echo "⏳ Step 1/5: Removing root node_modules..."
rm -rf node_modules
echo "✅ Done"

echo "⏳ Step 2/5: Removing package-lock.json..."
rm -rf package-lock.json
echo "✅ Done"

echo "⏳ Step 3/5: Removing workspace node_modules..."
rm -rf packages/spark-tools/node_modules 2>/dev/null || true
echo "✅ Done"

echo "⏳ Step 4/5: Cleaning npm cache..."
npm cache clean --force
echo "✅ Done"

echo "⏳ Step 5/5: Reinstalling packages (this may take 1-2 minutes)..."
npm install
echo "✅ Done"

echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║                                                          ║"
echo "║               ✅ FIX COMPLETE! ✅                        ║"
echo "║                                                          ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""
echo "Next step: Start the dev server"
echo ""
echo "  npm run dev"
echo ""
echo "The application should now start without errors!"
echo ""
