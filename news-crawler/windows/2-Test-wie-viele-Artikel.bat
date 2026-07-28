@echo off
chcp 65001 >nul
cd /d "%~dp0\.."
echo ============================================================
echo   TEST: Wie viele Deutschland-Artikel gibt es?
echo   (laedt noch nichts herunter - nur Verbindung testen)
echo ============================================================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo [FEHLER] Node.js ist nicht installiert.
  echo Bitte zuerst von https://nodejs.org die LTS-Version installieren.
  echo.
  pause
  exit /b
)
if not exist ".env" (
  echo [FEHLER] Keine Zugangsdaten gefunden.
  echo Bitte zuerst Datei 1-Zugangsdaten-eintragen.bat ausfuehren.
  echo.
  pause
  exit /b
)
node crawl.mjs --germany --dry-run
echo.
echo Test fertig. Wenn oben eine Artikel-Anzahl steht, hat alles geklappt.
pause
