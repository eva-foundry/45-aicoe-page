# Quick Fix for Vite Module Error

## Problem
```
Cannot find module '/workspaces/spark-template/node_modules/vite/dist/node/chunks/dist.js' 
imported from /workspaces/spark-template/node_modules/vite/dist/node/chunks/config.js
```

## Root Cause
The node_modules directory has corrupted Vite installation files.

## Solution

### Option 1: Clean Reinstall (Recommended)
Run these commands in your terminal:

```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall all packages
npm install
```

### Option 2: Using the provided script

**On Linux/Mac:**
```bash
chmod +x fix-dependencies.sh
./fix-dependencies.sh
```

**On Windows:**
```cmd
fix-dependencies.bat
```

### Option 3: Manual verification
If the above doesn't work, verify Vite installation:

```bash
# Check if vite module exists
ls -la node_modules/vite/dist/node/chunks/

# If missing or corrupted, force reinstall
npm install vite@^7.3.1 --force
```

## After Fix
Once packages are reinstalled, start the dev server:

```bash
npm run dev
```

The application should now start without errors.
