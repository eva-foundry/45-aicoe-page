@echo off
REM Fix script for Vite module resolution errors
REM Run this if you encounter: "Cannot find module '/workspaces/spark-template/node_modules/vite/dist/node/chunks/dist.js'"

echo 🔧 Starting dependency repair...

REM Step 1: Remove corrupted node_modules
echo 📦 Removing node_modules...
if exist node_modules rmdir /s /q node_modules

REM Step 2: Remove package lock
echo 🔓 Removing package-lock.json...
if exist package-lock.json del /q package-lock.json

REM Step 3: Remove workspace node_modules
echo 📦 Removing workspace node_modules...
if exist packages\spark-tools\node_modules rmdir /s /q packages\spark-tools\node_modules

REM Step 4: Clean npm cache
echo 🧹 Cleaning npm cache...
call npm cache clean --force

REM Step 5: Reinstall dependencies
echo 📥 Reinstalling dependencies...
call npm install

echo ✅ Dependencies repaired!
echo.
echo Try running: npm run dev
pause
