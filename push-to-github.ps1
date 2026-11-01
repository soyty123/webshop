# Automation script to verify and push updates to GitHub
param(
    [string]$CommitMessage = "Update EduShop changes"
)

$ErrorActionPreference = "Stop"

# Refresh PATH to include Git
$gitCmd = "$env:LOCALAPPDATA\Programs\Git\cmd"
if ($env:Path -notlike "*$gitCmd*") {
    $env:Path = "$gitCmd;$env:Path"
}

Write-Host ">>> 1. Verifying project integrity..." -ForegroundColor Cyan
& powershell -ExecutionPolicy Bypass -File .\verify-project.ps1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Verification failed! Push aborted." -ForegroundColor Red
    exit 1
}

Write-Host ">>> 2. Staging all changes..." -ForegroundColor Cyan
git add .

$status = git status --porcelain
if (-not $status) {
    Write-Host "No changes to commit. Working directory clean." -ForegroundColor Yellow
} else {
    Write-Host ">>> 3. Committing changes..." -ForegroundColor Cyan
    git commit -m $CommitMessage
}

Write-Host ">>> 4. Pushing to GitHub (origin main)..." -ForegroundColor Cyan
git push origin main

Write-Host ">>> Done! Successfully updated to GitHub." -ForegroundColor Green
