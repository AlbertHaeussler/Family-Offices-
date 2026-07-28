@echo off
chcp 65001 >nul
cd /d "%~dp0\.."
echo ============================================================
echo   Green Street News Crawler - Zugangsdaten eintragen
echo ============================================================
echo.
if not exist ".env" (
  copy ".env.example" ".env" >nul
  echo Eine neue Datei .env wurde erstellt.
) else (
  echo Es gibt bereits eine .env - ich oeffne sie zum Bearbeiten.
)
echo.
echo Es oeffnet sich gleich der Editor. Trage dort ein:
echo   GS_CLIENT_ID      = von my.greenstreet.com/client-credentials
echo   GS_CLIENT_SECRET  = ebenda
echo   ANTHROPIC_API_KEY = dein Anthropic-Key
echo.
echo Danach: oben links Datei ^> Speichern, dann Editor schliessen.
echo.
pause
notepad ".env"
echo.
echo Gespeichert. Weiter mit Datei 2.
pause
