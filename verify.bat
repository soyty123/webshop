@echo off
title EduShop Project Verification Suite
chcp 65001 >nul
cls
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0verify-project.ps1"
echo.
pause
