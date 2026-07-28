@echo off
chcp 65001 >nul
cd /d "%~dp0\.."
if exist "node-portable\node.exe" set "PATH=%CD%\node-portable;%PATH%"
echo ============================================================
echo   TEST: nur die ersten 20 Artikel auswerten
echo ============================================================
echo.
where node >nul 2>nul
if errorlevel 1 (echo [FEHLER] Node.js fehlt - https://nodejs.org & pause & exit /b)
if not exist "out\articles.json" (echo [FEHLER] Zuerst Datei 3 ausfuehren. & pause & exit /b)
node extract.mjs --limit=20
echo.
echo Test fertig. Schau in out\facts.csv, ob es gut aussieht.
pause
