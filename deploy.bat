@echo off
echo Starting secure deployment using GitHub token from .env file...
npm run deploy:secure
if %errorlevel% neq 0 (
  echo Deployment failed with error code %errorlevel%
  pause
  exit /b %errorlevel%
)
echo Deployment completed successfully!
pause