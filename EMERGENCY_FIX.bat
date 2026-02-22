@echo off
REM EMERGENCY FIX - Run this immediately to fix Vite error
REM Usage: EMERGENCY_FIX.bat

echo.
echo ===============================================================
echo.
echo        🚨 EMERGENCY FIX FOR VITE MODULE ERROR 🚨
echo.
echo ===============================================================
echo.
echo Error being fixed:
echo   Cannot find module '.../node_modules/vite/dist/node/chunks/dist.js'
echo.
echo This will:
echo   1. Delete corrupted node_modules
echo   2. Delete package-lock.json
echo   3. Clear npm cache
echo   4. Reinstall all packages
echo.
pause
echo.

echo ⏳ Step 1/5: Removing root node_modules...
if exist node_modules (
    rmdir /s /q node_modules
    echo ✅ Done
) else (
    echo ⚠️  Already deleted
)

echo ⏳ Step 2/5: Removing package-lock.json...
if exist package-lock.json (
    del /q package-lock.json
    echo ✅ Done
) else (
    echo ⚠️  Already deleted
)

echo ⏳ Step 3/5: Removing workspace node_modules...
if exist packages\spark-tools\node_modules (
    rmdir /s /q packages\spark-tools\node_modules
    echo ✅ Done
) else (
    echo ⚠️  Not found or already deleted
)

echo ⏳ Step 4/5: Cleaning npm cache...
call npm cache clean --force
echo ✅ Done

echo ⏳ Step 5/5: Reinstalling packages (this may take 1-2 minutes)...
call npm install
echo ✅ Done

echo.
echo ===============================================================
echo.
echo                ✅ FIX COMPLETE! ✅
echo.
echo ===============================================================
echo.
echo Next step: Start the dev server
echo.
echo   npm run dev
echo.
echo The application should now start without errors!
echo.
pause
