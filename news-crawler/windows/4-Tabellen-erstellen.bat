@echo off
chcp 65001 >nul
cd /d "%~dp0\.."
echo ============================================================
echo   Tabellen erstellen (nach Topic sortiert + Fakten)
echo ============================================================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo [FEHLER] Node.js ist nicht installiert. Bitte von https://nodejs.org installieren.
  pause & exit /b
)
if not exist "out\articles.json" (
  echo [FEHLER] Noch keine Artikel da. Bitte zuerst Datei 3 ausfuehren.
  pause & exit /b
)
echo Tipp: Fuer einen kleinen Test zuerst nur 20 Artikel? Dann diese Datei
echo schliessen und stattdessen "4b-Test-20-Artikel.bat" nutzen.
echo.
node extract.mjs
echo.
echo Fertig! Die Tabellen liegen im Ordner "out":
echo   out\facts.csv              (alles kombiniert)
echo   out\by-topic\*.csv         (eine Tabelle pro Topic)
echo   out\news.json              (fuer die App)
echo.
echo CSV-Dateien kannst du direkt in Excel oeffnen.
pause
