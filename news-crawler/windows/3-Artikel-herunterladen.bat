@echo off
chcp 65001 >nul
cd /d "%~dp0\.."
if exist "node-portable\node.exe" set "PATH=%CD%\node-portable;%PATH%"
echo ============================================================
echo   Deutschland-Artikel herunterladen (voller Lauf)
echo ============================================================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo [FEHLER] Node.js ist nicht installiert. Bitte von https://nodejs.org installieren.
  pause & exit /b
)
if not exist ".env" (
  echo [FEHLER] Keine Zugangsdaten. Bitte zuerst Datei 1 ausfuehren.
  pause & exit /b
)
node crawl.mjs --germany
echo.
echo Fertig. Die Rohdaten liegen jetzt im Ordner "out".
echo Weiter mit Datei 4, um die Tabellen zu erstellen.
pause
