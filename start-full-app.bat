@echo off
echo Starting Clarity Inc Full Application...
echo.
echo Starting Backend (Python FastAPI) on port 8000...
start "Clarrie Backend" cmd /k "cd /d "%~dp0\..\backend" && python -m venv venv && call venv\Scripts\activate && pip install -r requirements.txt && python main.py"

timeout /t 5

echo.
echo Starting Frontend (Next.js) on port 3000...
start "Clarity Portfolio" cmd /k "cd /d "%~dp0" && npm run dev"

echo.
echo ========================================
echo Clarity Inc is starting up!
echo ========================================
echo Backend (Clarrie AI): http://localhost:8000
echo Frontend (Portfolio): http://localhost:3000
echo ========================================
echo.
echo Press any key to exit this window (servers will continue running in separate windows)
pause >nul



