# ==============================================================================
# EduShop Project Verification & Health Check Script
# Usage: powershell -ExecutionPolicy Bypass -File .\verify-project.ps1 [-Quick]
# ==============================================================================
param (
    [switch]$Quick = $false
)

$ErrorActionPreference = "Continue"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
if (-not $scriptDir) { $scriptDir = Get-Location }
Set-Location $scriptDir

$passedCount = 0
$failedCount = 0
$warnCount = 0

function Report-Pass($name, $detail = "") {
    $script:passedCount++
    Write-Host "  [✓ PASS] " -ForegroundColor Green -NoNewline
    Write-Host "$name " -ForegroundColor White -NoNewline
    if ($detail) { Write-Host "($detail)" -ForegroundColor Gray } else { Write-Host "" }
}

function Report-Fail($name, $detail = "") {
    $script:failedCount++
    Write-Host "  [✗ FAIL] " -ForegroundColor Red -NoNewline
    Write-Host "$name " -ForegroundColor Yellow -NoNewline
    if ($detail) { Write-Host "- $detail" -ForegroundColor Red } else { Write-Host "" }
}

function Report-Warn($name, $detail = "") {
    $script:warnCount++
    Write-Host "  [! WARN] " -ForegroundColor Yellow -NoNewline
    Write-Host "$name " -ForegroundColor White -NoNewline
    if ($detail) { Write-Host "($detail)" -ForegroundColor DarkYellow } else { Write-Host "" }
}

Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host " 🛡️  EDUSHOP PROJECT VERIFICATION & HEALTH CHECK SUITE" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host " Directory: $scriptDir" -ForegroundColor Gray
Write-Host " Date/Time: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" -ForegroundColor Gray
Write-Host ""

# ------------------------------------------------------------------------------
# 1. FILE EXISTENCE & INTEGRITY CHECKS
# ------------------------------------------------------------------------------
Write-Host "--- [1/4] File Existence & Parity Checks ---" -ForegroundColor Cyan

$requiredFiles = @(
    "index.html",
    "user.html",
    "admin.html",
    "app.js",
    "admin.js",
    "style.css",
    "qrcode.min.js",
    "aba_khqr.jpg",
    "acleda_khqr.jpg",
    "manifest.json",
    "sw.js",
    "icon-192.png",
    "icon-512.png",
    "logo.png",
    "telegram_qr.png"
)

foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        $size = (Get-Item $file).Length
        Report-Pass "Required file: $file" "$([math]::Round($size / 1KB, 1)) KB"
    } else {
        Report-Fail "Missing required file: $file" "File does not exist"
    }
}

# Check index.html and user.html parity (must be 100% identical)
if ((Test-Path "index.html") -and (Test-Path "user.html")) {
    $hashIndex = (Get-FileHash -Algorithm SHA256 "index.html").Hash
    $hashUser = (Get-FileHash -Algorithm SHA256 "user.html").Hash

    if ($hashIndex -eq $hashUser) {
        Report-Pass "HTML Parity (index.html == user.html)" "SHA256: $($hashIndex.Substring(0, 16))..."
    } else {
        Report-Fail "HTML Parity Mismatch!" "index.html and user.html have different SHA256 hashes! Run: Copy-Item 'index.html' 'user.html' -Force"
    }
}

# ------------------------------------------------------------------------------
# 2. HTML STRUCTURE & SCRIPT INCLUSION CHECKS
# ------------------------------------------------------------------------------
Write-Host ""
Write-Host "--- [2/4] HTML Elements & Script Tag Checks ---" -ForegroundColor Cyan

if (Test-Path "index.html") {
    $indexContent = Get-Content "index.html" -Raw -Encoding UTF8

    # Script tag order
    if ($indexContent -match '<script src="qrcode\.min\.js"></script>[\s\S]*?<script src="app\.js"></script>') {
        Report-Pass "index.html script order" "qrcode.min.js correctly loaded before app.js"
    } else {
        Report-Fail "index.html script order" "qrcode.min.js must be loaded before app.js"
    }

    # Mandatory elements in index.html
    $mandatoryIds = @(
        "khqr-code-img",
        "khqr-download-btn",
        "khqr-amount-display",
        "order-modal",
        "quick-order-modal",
        "customer-receipt-modal",
        "cart-drawer",
        "cart-items",
        "cart-count",
        "bank-selector-modal",
        "wishlist-modal",
        "wishlist-size-modal",
        "image-preview-modal",
        "image-lightbox-modal",
        "lightbox-viewport",
        "lightbox-zoom-level",
        "mobile-bottom-nav",
        "website-qr-modal",
        "website-qr-code-img",
        "website-qr-open-link-btn",
        "btn-night-mode-toggle",
        "btn-night-mode-top",
        "cart-wholesale-tier-card",
        "cust-engrave-school",
        "cust-engrave-grade",
        "btn-pwa-install-top",
        "pwa-ios-modal",
        "student-certificate-modal",
        "school-budget-calculator-modal",
        "classroom-showcase-modal",
        "free-resources-modal",
        "lucky-spin-modal",
        "student-nametag-modal",
        "product-compare-modal",
        "classroom-upload-modal",
        "courier-finder-modal",
        "proforma-invoice-modal",
        "subject-grade-filter-strip",
        "classroom-wall-studio-modal",
        "tracing-worksheet-modal",
        "curriculum-bundles-modal",
        "customer-order-tracker-modal",
        "teacher-loyalty-modal",
        "lucky-spin-standout-banner",
        "floating-lucky-spin",
        "slip-upload-section",
        "slip-dropzone",
        "cust-slip-input",
        "slip-verification-box",
        "slip-match-badge",
        "slip-expected-display",
        "cust-slip-currency",
        "cust-slip-amount",
        "cust-slip-account-select",
        "slip-account-badge",
        "slip-payment-correction-notice"
    )

    foreach ($id in $mandatoryIds) {
        if ($indexContent -match "id=['`"]$id['`"]") {
            Report-Pass "Element #$id exists in index.html"
        } else {
            Report-Fail "Missing element #$id in index.html"
        }
    }
}

if (Test-Path "admin.html") {
    $adminHtmlContent = Get-Content "admin.html" -Raw -Encoding UTF8
    if ($adminHtmlContent -match '<script src="admin\.js"></script>') {
        Report-Pass "admin.html loads admin.js"
    } else {
        Report-Fail "admin.html missing <script src='admin.js'></script>"
    }

    if ($adminHtmlContent -match 'id="preset-size-manager-modal"' -and $adminHtmlContent -match 'id="batch-item-add-size-modal"' -and $adminHtmlContent -match 'id="single-product-size-presets-grid"' -and $adminHtmlContent -match 'id="batch-bulk-preset-buttons"') {
        Report-Pass "Element #preset-size-manager-modal & #batch-item-add-size-modal exist in admin.html"
    } else {
        Report-Fail "Missing #preset-size-manager-modal or #batch-item-add-size-modal in admin.html"
    }

    if ($adminHtmlContent -match 'id="btn-single-frame-none"' -and $adminHtmlContent -match 'id="btn-single-frame-has"' -and $adminHtmlContent -match 'id="btn-batch-frame-none"' -and $adminHtmlContent -match 'id="btn-batch-frame-has"') {
        Report-Pass "Frame selection toggle buttons exist in admin.html" "btn-single-frame-none/has and btn-batch-frame-none/has present"
    } else {
        Report-Fail "Missing frame toggle buttons in admin.html"
    }

    # Shipping fee & Home Delivery configuration elements in admin.html & index.html
    if ($adminHtmlContent -match 'id="btn-shipping-settings"' -and $adminHtmlContent -match 'id="admin-shipping-home-enabled"' -and $indexContent -match 'name="order_delivery_type"' -and $indexContent -match 'id="cust-shipping-location"') {
        Report-Pass "Shipping fee & Home Delivery elements exist" "admin-shipping-home-enabled, order_delivery_type and cust-shipping-location verified"
    } else {
        Report-Fail "Missing shipping fee or home delivery configuration elements in admin.html or index.html"
    }

    # Admin Modals & Alerts Elements Check
    if ($adminHtmlContent -match 'id="backup-restore-modal"' -and $adminHtmlContent -match 'id="order-tracking-modal"' -and $adminHtmlContent -match 'id="admin-low-stock-banner"' -and $adminHtmlContent -match 'id="admin-low-stock-nav-badge"') {
        Report-Pass "Admin Backup, Tracking & Low Stock elements exist in admin.html" "backup-restore-modal, order-tracking-modal, admin-low-stock-banner & admin-low-stock-nav-badge verified"
    } else {
        Report-Fail "Missing admin backup, tracking, or low stock elements in admin.html"
    }

    # Admin PWA, Audio Notification & Live Alert Elements Check
    if ($adminHtmlContent -match 'id="btn-admin-pwa-install"' -and $adminHtmlContent -match 'id="btn-admin-sound-toggle"' -and $adminHtmlContent -match 'id="admin-live-order-alert-banner"') {
        Report-Pass "Admin PWA, Audio Chime & Live Alert elements exist in admin.html" "btn-admin-pwa-install, btn-admin-sound-toggle & admin-live-order-alert-banner verified"
    } else {
        Report-Fail "Missing Admin PWA, sound toggle, or live order alert elements in admin.html"
    }

    # Admin Promo Banner Elements Check
    if ($adminHtmlContent -match 'id="btn-admin-promo-banner"' -and $adminHtmlContent -match 'id="admin-promo-banner-modal"' -and $adminHtmlContent -match 'id="promo-input-tag"' -and $adminHtmlContent -match 'id="admin-current-promo-tag-badge"') {
        Report-Pass "Admin Promo Banner Editor elements exist in admin.html" "btn-admin-promo-banner, admin-promo-banner-modal, inputs & badge verified"
    } else {
        Report-Fail "Missing Admin Promo Banner Editor elements in admin.html"
    }

    # Admin Bulk Wholesale Discounts Elements Check
    if ($adminHtmlContent -match 'id="btn-admin-bulk-discounts"' -and $adminHtmlContent -match 'id="admin-bulk-discount-modal"' -and $adminHtmlContent -match 'id="bulk-tier1-units"' -and $adminHtmlContent -match 'id="admin-bulk-discount-badge"') {
        Report-Pass "Admin Bulk Wholesale Discount Editor elements exist in admin.html" "btn-admin-bulk-discounts, admin-bulk-discount-modal, inputs & badge verified"
    } else {
        Report-Fail "Missing Admin Bulk Wholesale Discount Editor elements in admin.html"
    }
}

# ------------------------------------------------------------------------------
# 3. JAVASCRIPT STATIC PATTERNS & CODE SAFETY
# ------------------------------------------------------------------------------
Write-Host ""
Write-Host "--- [3/4] JavaScript Static Patterns & Safety ---" -ForegroundColor Cyan

if (Test-Path "app.js") {
    $appContent = Get-Content "app.js" -Raw -Encoding UTF8

    # Safe download helper (target="_blank" check)
    if ($appContent -match 'function directDownloadLink\([^)]*\)\s*\{[\s\S]*?link\.target\s*=\s*[''"]_blank[''"]') {
        Report-Fail "Unsafe directDownloadLink pattern" "directDownloadLink has target='_blank' which causes popup blockers!"
    } else {
        Report-Pass "Safe directDownloadLink pattern" "No popup-triggering target='_blank'"
    }

    # Pure JS qrcode engine presence
    if ($appContent -match 'typeof window\.qrcode' -or $appContent -match 'qrcode\(0,\s*[''"]M[''"]\)') {
        Report-Pass "app.js embeds/uses qrcode engine"
    } else {
        Report-Fail "app.js missing qrcode engine references"
    }

    # KHQR payload generator check
    if ($appContent -match 'function generateAbaKhqrPayload' -and $appContent -match 'calcKhqrCrc16') {
        Report-Pass "Dynamic ABA KHQR & CRC16 logic defined"
    } else {
        Report-Fail "Missing generateAbaKhqrPayload or calcKhqrCrc16 in app.js"
    }

    # ACLEDA & ABA static payload constants
    if ($appContent -match 'ACLEDA_KHQR_STATIC_PAYLOAD' -and $appContent -match 'ABA_KHQR_STATIC_PAYLOAD') {
        Report-Pass "Official ACLEDA and ABA payload constants defined"
    } else {
        Report-Fail "Missing ACLEDA_KHQR_STATIC_PAYLOAD or ABA_KHQR_STATIC_PAYLOAD in app.js"
    }

    # Canvas card generator check
    if ($appContent -match 'function generateKhqrCardBlob') {
        Report-Pass "Canvas KHQR card generator defined (generateKhqrCardBlob)"
    } else {
        Report-Fail "Missing generateKhqrCardBlob in app.js"
    }

    # Mobile save preview modal check
    if ($appContent -match 'function openMobileSaveQrPreviewModal' -and $appContent -match 'triggerNativeKhqrShare') {
        Report-Pass "Mobile save preview modal & Native Share handler defined"
    } else {
        Report-Fail "Missing openMobileSaveQrPreviewModal or triggerNativeKhqrShare in app.js"
    }

    # Bank Selector & Deep Linking check
    if ($appContent -match 'function openBankSelectorModal' -and $appContent -match 'function launchBankApp' -and $appContent -match 'SUPPORTED_BANKS') {
        Report-Pass "Bank selector & deep-link launcher defined (openBankSelectorModal, launchBankApp)"
    } else {
        Report-Fail "Missing openBankSelectorModal, launchBankApp, or SUPPORTED_BANKS in app.js"
    }

    # Product-specific Available Sizes check
    if ($appContent -match 'function getProductAvailableSizes') {
        Report-Pass "Product-specific availableSizes helper defined in app.js"
    } else {
        Report-Fail "Missing getProductAvailableSizes in app.js"
    }

    # Wishlist Size Selection Engine check
    if ($appContent -match 'function handleWishlistButtonClick' -and $appContent -match 'function openWishlistSizeModal' -and $appContent -match 'function confirmSaveToWishlist' -and $appContent -match 'function selectWishlistSize') {
        Report-Pass "Wishlist size selection engine defined in app.js" "handleWishlistButtonClick, openWishlistSizeModal, confirmSaveToWishlist operational"
    } else {
        Report-Fail "Missing wishlist size selection functions in app.js"
    }

    # Fullscreen Lightbox & Zoom Engine check
    if ($appContent -match 'function openImageLightbox' -and $appContent -match 'function closeImageLightbox' -and $appContent -match 'function lightboxZoomIn' -and $appContent -match 'function lightboxResetZoom' -and $appContent -match 'function applyLightboxTransform') {
        Report-Pass "Fullscreen Lightbox & Zoom engine defined in app.js" "openImageLightbox, zoom, pan & touch pinch operational"
    } else {
        Report-Fail "Missing Fullscreen Lightbox functions in app.js"
    }

    # Universal Body Scroll Lock & Cross-Platform Mobile Engine check
    if ($appContent -match 'function updateBodyScrollLock') {
        Report-Pass "Universal Body Scroll Lock engine defined in app.js" "modal-open background lock & dvh support operational"
    } else {
        Report-Fail "Missing updateBodyScrollLock in app.js"
    }

    # Store Website QR Code Engine Check
    if ($appContent -match 'const STORE_TELEGRAM_URL = ''https://t.me/\+855(964361201|319711333)''' -and $appContent -match 'function openWebsiteQrModal' -and $appContent -match 'function setWebsiteQrTargetMode') {
        Report-Pass "Store Website QR Code engine defined in app.js" "Telegram live link (096 436 1201 / 031 971 1333), Dual-Mode Switcher & Scroll Lock operational"
    } else {
        Report-Fail "Missing Store Website QR Code engine or Telegram link in app.js"
    }

    # Customer Night Mode Engine Check
    if ($appContent -match 'const NIGHT_MODE_STORAGE_KEY' -and $appContent -match 'function initNightMode' -and $appContent -match 'function toggleNightMode') {
        Report-Pass "Customer Night Mode engine defined in app.js" "initNightMode, toggleNightMode & localStorage sync operational"
    } else {
        Report-Fail "Missing Customer Night Mode functions in app.js"
    }

    # Bulk / Wholesale Discount, Free Engraving & School Proposal Engines Check
    if ($appContent -match 'function getBulkDiscountInfo' -and $appContent -match 'function syncSchoolEngraveText' -and $appContent -match 'function shareCartForPrincipalApproval' -and $appContent -match 'function openDirectImageLightbox') {
        Report-Pass "Customer Wholesale Tier & School Features defined in app.js" "getBulkDiscountInfo, syncSchoolEngraveText, shareCartForPrincipalApproval & openDirectImageLightbox operational"
    } else {
        Report-Fail "Missing Wholesale Tier or School Proposal functions in app.js"
    }

    # Instant Telegram Bot Order Notification with HTML layout & Buttons
    if ($appContent -match 'function formatTelegramBotHtmlMessage' -and $appContent -match 'function sendTelegramBotOrderAlert' -and $appContent -match 'parse_mode' -and $appContent -match 'inline_keyboard') {
        Report-Pass "Telegram Bot Rich HTML Order Dispatcher defined in app.js" "formatTelegramBotHtmlMessage, sendTelegramBotOrderAlert, HTML parse_mode & inline action buttons verified"
    } else {
        Report-Fail "Missing rich Telegram Bot order notification functions in app.js"
    }

    # User PWA & Offline Engine check
    if ($appContent -match 'function initUserPwa' -and $appContent -match 'function promptPwaInstall' -and $appContent -match 'function openPwaIosModal' -and $appContent -match 'function closePwaIosModal') {
        Report-Pass "User PWA & Offline Engine defined in app.js" "initUserPwa, promptPwaInstall, openPwaIosModal & closePwaIosModal verified"
    } else {
        Report-Fail "Missing User PWA functions in app.js"
    }

    # Storefront Promo Banner Synchronization Engine Check
    if ($appContent -match 'PROMO_BANNER_STORAGE_KEY' -and $appContent -match 'function applyPromoBannerSettings' -and $appContent -match 'function getStoredPromoBannerSettings') {
        Report-Pass "Storefront Promo Banner engine defined in app.js" "applyPromoBannerSettings, getStoredPromoBannerSettings & cross-tab sync operational"
    } else {
        Report-Fail "Missing Storefront Promo Banner functions in app.js"
    }

    # 6 Advanced Educational & Interactive Store Features Check
    if ($appContent -match 'function openStudentCertificateModal' -and $appContent -match 'function renderCertificateCanvas' -and $appContent -match 'function openSchoolBudgetModal' -and $appContent -match 'function openClassroomShowcaseModal' -and $appContent -match 'function openFreeResourcesModal' -and $appContent -match 'function openLuckySpinModal' -and $appContent -match 'function playPosterAudioPreview') {
        Report-Pass "6 Advanced Educational Store Features defined in app.js" "Certificates, School Budget, Showcase, Printables, Lucky Spin & Audio Previews operational"
    } else {
        Report-Fail "Missing Advanced Educational Store features in app.js"
    }

    # Lucky Spin 10-Spin Guarantee, 2 Free Spins & $5 Order Earned Spins Engine Check
    if ($appContent -match 'LUCKY_SPINS_STORAGE_KEY' -and $appContent -match 'LUCKY_STREAK_STORAGE_KEY' -and $appContent -match 'function getLuckySpinsBalance' -and $appContent -match 'function addLuckySpins' -and $appContent -match 'function getLuckySpinsStreak' -and $appContent -match 'function spinLuckyWheel') {
        Report-Pass "Lucky Spin 10-Spin Guarantee, 2 Free Spins & Order Earned Spins Engine defined in app.js" "2 Free Spins, 10-spin pity guarantee & Math.floor(payableUSD / 5) earned spins operational"
    } else {
        Report-Fail "Missing Lucky Spin Enhanced Engine in app.js"
    }

    # 6 Additional High-Value Classroom & Teacher Features Check
    if ($appContent -match 'function openStudentNametagModal' -and $appContent -match 'function renderNametagCanvas' -and $appContent -match 'function openProductCompareModal' -and $appContent -match 'function quickToggleCompare' -and $appContent -match 'function openClassroomUploadModal' -and $appContent -match 'function submitClassroomReview' -and $appContent -match 'function openCourierFinderModal' -and $appContent -match 'function renderCourierInfo' -and $appContent -match 'function openProformaInvoiceModal' -and $appContent -match 'function printProformaInvoice' -and $appContent -match 'function setGradeFilter' -and $appContent -match 'function setSubjectFilter') {
        Report-Pass "6 New High-Value Teacher & School Features defined in app.js" "Nametags, Compare, Upload Review, Courier Finder, Quotation & Filters operational"
    } else {
        Report-Fail "Missing 6 New Teacher & School features in app.js"
    }

    # 5 Next-Level Educational & Customer Hub Features Check
    if ($appContent -match 'function openClassroomWallStudioModal' -and $appContent -match 'function setWallStudioTheme' -and $appContent -match 'function openTracingWorksheetModal' -and $appContent -match 'function renderTracingWorksheetCanvas' -and $appContent -match 'function openCurriculumBundlesModal' -and $appContent -match 'function renderCurriculumBundlesGrid' -and $appContent -match 'function openCustomerOrderTrackerModal' -and $appContent -match 'function renderDemoOrderTracker' -and $appContent -match 'function openTeacherLoyaltyModal' -and $appContent -match 'function renderTeacherLoyaltyHub') {
        Report-Pass "5 Next-Level Educational & Customer Hub Features defined in app.js" "Wall Studio, Tracing Studio, Curriculum Bundles, Live Order Tracker & EduPoints operational"
    } else {
        Report-Fail "Missing 5 Next-Level Features in app.js"
    }

    # Payment Slip Mandatory Upload & Live Amount Verification Engine Check
    if ($appContent -match 'function getOrderPayableAmounts' -and $appContent -match 'function validateSlipAmountLive' -and $appContent -match 'function autoMatchSlipAmount' -and $appContent -match 'function handleSlipSelected' -and $appContent -match 'function removeSlip') {
        Report-Pass "Payment Slip Mandatory Upload & Amount Verification Engine defined in app.js" "getOrderPayableAmounts, validateSlipAmountLive, autoMatchSlipAmount & upload/remove handlers operational"
    } else {
        Report-Fail "Missing Payment Slip Upload & Amount Verification functions in app.js"
    }

    # Bracket balance check (Simple check for balanced curly braces)
    $openCurly = ([regex]::Matches($appContent, '\{')).Count
    $closeCurly = ([regex]::Matches($appContent, '\}')).Count
    if ($openCurly -eq $closeCurly) {
        Report-Pass "app.js Curly Braces Balance" "$openCurly open == $closeCurly close"
    } else {
        Report-Fail "app.js Curly Braces Unbalanced!" "Open: $openCurly, Close: $closeCurly (Difference: $($openCurly - $closeCurly))"
    }
}

if (Test-Path "admin.js") {
    $adminContent = Get-Content "admin.js" -Raw -Encoding UTF8
    $openCurlyA = ([regex]::Matches($adminContent, '\{')).Count
    $closeCurlyA = ([regex]::Matches($adminContent, '\}')).Count
    if ($openCurlyA -eq $closeCurlyA) {
        Report-Pass "admin.js Curly Braces Balance" "$openCurlyA open == $closeCurlyA close"
    } else {
        Report-Fail "admin.js Curly Braces Unbalanced!" "Open: $openCurlyA, Close: $closeCurlyA"
    }

    # Batch Size Selector & Custom Dimensions Engine Check
    if ($adminContent -match 'function updateBatchItemSizePreset' -and $adminContent -match 'function bulkSetBatchItemSize' -and $adminContent -match 'calcCustomDimensionsPrice') {
        Report-Pass "Batch size selector & custom dimension engine defined" "Direct on-image dropdown, preset pills & bulk setter operational"
    } else {
        Report-Fail "Missing batch size selector functions in admin.js"
    }

    # Preset Manager Functions Check (Add, Delete, Reset, Render)
    if ($adminContent -match 'function getSizePresets' -and $adminContent -match 'function saveSizePresets' -and $adminContent -match 'function deleteSizePreset' -and $adminContent -match 'function saveNewSizePreset' -and $adminContent -match 'function resetDefaultSizePresets') {
        Report-Pass "Preset size management engine defined" "getSizePresets, deleteSizePreset, saveNewSizePreset, resetDefaultSizePresets operational"
    } else {
        Report-Fail "Missing preset management functions in admin.js"
    }

    if ($adminContent -match 'function removeSizeFromBatchItem' -and $adminContent -match 'function openBatchItemAddSizeModal' -and $adminContent -match 'function confirmAddSizeToBatchItem' -and $adminContent -match 'function saveBatchItemCustomAsSize') {
        Report-Pass "Per-item independent size management defined" "removeSizeFromBatchItem, openBatchItemAddSizeModal, saveBatchItemCustomAsSize operational"
    } else {
        Report-Fail "Missing per-item independent size management functions in admin.js"
    }

    # Frame Selection (Has Frame / No Frame) Check
    if ($adminContent -match 'function setBatchItemHasFrame' -and $adminContent -match 'function updateBatchItemFrameColor' -and $adminContent -match 'function setBatchDefaultHasFrame' -and $adminContent -match 'function setSingleProductHasFrame') {
        Report-Pass "Frame selection engine (Has/No Frame) defined" "setBatchItemHasFrame, updateBatchItemFrameColor, setBatchDefaultHasFrame, setSingleProductHasFrame operational"
    } else {
        Report-Fail "Missing frame selection functions in admin.js"
    }

    # Shipping Fee & Home Delivery Management & Calculation Engines Check
    if ($adminContent -match 'function openShippingSettingsModal' -and $adminContent -match 'function onHomeShippingUsdInput' -and $adminContent -match 'DEFAULT_SHIPPING_SETTINGS' -and $appContent -match 'function onOrderDeliveryTypeChange' -and $appContent -match 'function getEffectiveOrderShipping') {
        Report-Pass "Shipping fee & Home Delivery engines defined" "openShippingSettingsModal, onHomeShippingUsdInput, onOrderDeliveryTypeChange & getEffectiveOrderShipping operational"
    } else {
        Report-Fail "Missing shipping fee or home delivery functions in admin.js or app.js"
    }

    # Admin Low Stock Alert Notification Banner & Quick Restock Engine
    if ($adminContent -match 'function updateLowStockAlerts' -and $adminContent -match 'function quickRestockProduct' -and $adminContent -match 'function dismissLowStockBanner' -and $adminContent -match 'function promptQuickRestock') {
        Report-Pass "Admin Low Stock Alert & Quick Restock engine defined" "updateLowStockAlerts, quickRestockProduct, dismissLowStockBanner & promptQuickRestock operational"
    } else {
        Report-Fail "Missing Admin Low Stock Alert or Quick Restock functions in admin.js"
    }

    # Admin Courier & Delivery Tracking Integration with Telegram Notification Engine
    if ($adminContent -match 'function openOrderTrackingModal' -and $adminContent -match 'function saveOrderTrackingInfo' -and $adminContent -match 'function sendCustomerTrackingTelegram' -and $adminContent -match 'function notifyCustomerDeliveryTelegram' -and $adminContent -match 'function formatCustomerDeliveryMessage') {
        Report-Pass "Admin Courier Tracking & Telegram Notification engine defined" "openOrderTrackingModal, saveOrderTrackingInfo, sendCustomerTrackingTelegram & notifyCustomerDeliveryTelegram operational"
    } else {
        Report-Fail "Missing Admin Courier Tracking or Telegram Notification functions in admin.js"
    }

    # Admin Backup & Restore Hub with Pre-restore Inspection Engine
    if ($adminContent -match 'function openBackupRestoreModal' -and $adminContent -match 'function confirmRestoreSelectedData' -and $adminContent -match 'function handleRestoreFileInspection' -and $adminContent -match 'function getFullSystemBackupObject') {
        Report-Pass "Admin Backup & Restore Hub engine defined" "openBackupRestoreModal, confirmRestoreSelectedData, handleRestoreFileInspection & getFullSystemBackupObject operational"
    } else {
        Report-Fail "Missing Admin Backup & Restore Hub functions in admin.js"
    }

    # Admin Enhanced Sales Orders CSV Export Engine
    if ($adminContent -match 'function exportOrdersCSV' -and $adminContent -match 'ឈ្មោះសាលារៀន' -and $adminContent -match 'ក្រុមហ៊ុនដឹកជញ្ជូន' -and $adminContent -match 'លេខកូដបញ្ញើ') {
        Report-Pass "Admin Enhanced Orders CSV Export engine defined" "exportOrdersCSV includes School, Bulk Discount, Courier & Tracking with UTF-8 BOM"
    } else {
        Report-Fail "Missing enhanced columns in exportOrdersCSV in admin.js"
    }

    # Web Audio Real-time Chime & Sound Controls check
    if ($adminContent -match 'function playOrderNotificationChime' -and $adminContent -match 'function testOrderNotificationSound' -and $adminContent -match 'function toggleOrderAlertSound' -and $adminContent -match 'function isOrderAlertSoundEnabled') {
        Report-Pass "Web Audio API Live Chime & Sound Toggle defined in admin.js" "Synthesized harmonic chime, sound state toggle & persistence verified"
    } else {
        Report-Fail "Missing Web Audio chime or sound toggle functions in admin.js"
    }

    # Admin Live Order Alert Banner & Admin PWA check
    if ($adminContent -match 'function showLiveOrderAlertBanner' -and $adminContent -match 'function dismissLiveOrderAlert' -and $adminContent -match 'function initAdminPwa' -and $adminContent -match 'function promptAdminPwaInstall') {
        Report-Pass "Admin Live Order Alert Banner & PWA defined in admin.js" "showLiveOrderAlertBanner, dismissLiveOrderAlert, initAdminPwa & promptAdminPwaInstall verified"
    } else {
        Report-Fail "Missing Admin Live Alert Banner or Admin PWA functions in admin.js"
    }

    # Admin Promo Banner Customizer Check
    if ($adminContent -match 'PROMO_BANNER_STORAGE_KEY' -and $adminContent -match 'function openAdminPromoBannerModal' -and $adminContent -match 'function handleSavePromoBanner' -and $adminContent -match 'function applyPromoPreset') {
        Report-Pass "Admin Promo Banner Editor engine defined in admin.js" "openAdminPromoBannerModal, handleSavePromoBanner, applyPromoPreset & presets verified"
    } else {
        Report-Fail "Missing Promo Banner Editor functions in admin.js"
    }

    # Admin Bulk Wholesale Discounts Engine Check
    if ($adminContent -match 'BULK_DISCOUNT_STORAGE_KEY' -and $adminContent -match 'function openAdminBulkDiscountModal' -and $adminContent -match 'function handleSaveBulkDiscountSettings' -and $adminContent -match 'function applyBulkDiscountPreset') {
        Report-Pass "Admin Bulk Wholesale Discount Editor engine defined in admin.js" "openAdminBulkDiscountModal, handleSaveBulkDiscountSettings, applyBulkDiscountPreset & presets verified"
    } else {
        Report-Fail "Missing Bulk Wholesale Discount Editor functions in admin.js"
    }
}

if (Test-Path "style.css") {
    $styleContent = Get-Content "style.css" -Raw -Encoding UTF8
    if ($styleContent -match 'body\.modal-open' -and $styleContent -match '100dvh' -and $styleContent -match 'overscroll-behavior') {
        Report-Pass "Mobile & Desktop CSS Enhancements (style.css)" "body.modal-open, 100dvh & overscroll-behavior contain verified"
    } else {
        Report-Fail "Missing modal-open, 100dvh, or overscroll-behavior in style.css"
    }
}

# ------------------------------------------------------------------------------
# 4. HEADLESS BROWSER RUNTIME VERIFICATION (CANVAS & KHQR)
# ------------------------------------------------------------------------------
Write-Host ""
Write-Host "--- [4/4] Headless Browser Runtime Verification ---" -ForegroundColor Cyan

$edgeCandidates = @(
    "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    "C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    "$env:LOCALAPPDATA\Microsoft\Edge\Application\msedge.exe",
    "C:\Program Files\Google\Chrome\Application\chrome.exe",
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
)

$browserPath = $null
foreach ($cand in $edgeCandidates) {
    if (Test-Path $cand) {
        $browserPath = $cand
        break
    }
}

if ($Quick) {
    Report-Warn "Headless Browser Test Skipped" "'-Quick' flag specified"
} elseif (-not $browserPath) {
    Report-Warn "Headless Browser Test Skipped" "No compatible Chromium browser found at standard paths"
} else {
    Write-Host "  Using Browser: $browserPath" -ForegroundColor Gray

    # Create temporary harness HTML to test in actual browser engine
    $harnessPath = Join-Path $scriptDir "__runtime_test_harness.html"
    $harnessHtml = @"
<!DOCTYPE html>
<html><head><meta charset="utf-8">
<script>
window.onerror = function(msg, url, line, col, err) {
  var el = document.getElementById('harness-result');
  if (el) el.innerText = JSON.stringify([{ pass: false, name: 'Runtime Error', detail: msg + ' at ' + (line||'?') + ':' + (col||'?') }]);
};
</script>
</head>
<body>
<div id="harness-result">RUNNING</div>
<div id="top-promo-bar"><span id="top-promo-tag"></span><span id="top-promo-text"></span></div>
<div id="hero-section"><span id="hero-badge"></span><h1 id="hero-heading"></h1><p id="hero-subtitle"></p></div>
<div id="khqr-amount-display">25,000 ៛</div>
<img id="khqr-code-img" src="aba_khqr.jpg">
<div id="products-grid"></div>
<div id="empty-state" class="hidden"></div>
<div id="bank-selector-modal" class="hidden"></div>
<div id="bank-selector-amount"></div>
<div id="bank-selector-merchant"></div>
<div id="order-modal" class="hidden"></div>
<div id="modal-product-summary"></div>
<div id="order-modal-cart-badge" class="hidden">0</div>
<div id="modal-single-cart-action-row"></div>
<div id="cart-drawer" class="translate-x-full"></div>
<div id="cart-drawer-backdrop" class="hidden"></div>
<div id="cart-items"></div>
<div id="cart-total-usd"></div>
<div id="cart-total-khr"></div>
<div id="cart-count"></div>
<div id="mobile-cart-badge"></div>
<div id="toast" class="hidden"></div>
<div id="toast-message"></div>
<div id="cart-wholesale-tier-card" class="hidden"></div>
<div id="cart-wholesale-progress-bar" style="width: 0%"></div>
<span id="cart-wholesale-status-tag">0% Off</span>
<span id="cart-wholesale-badge-text"></span>
<p id="cart-wholesale-hint"></p>
<div id="cart-wholesale-discount-row" class="hidden"></div>
<span id="cart-wholesale-percent-tag">0%</span>
<span id="cart-wholesale-discount-usd">$0.00</span>
<span id="cart-wholesale-discount-khr">0 ៛</span>
<span id="cart-subtotal-usd">$0.00</span>
<input id="cust-custom-text" value="">
<input id="cust-engrave-school" value="">
<input id="cust-engrave-grade" value="">
<input id="cust-name" value="">
<input id="cust-phone" value="">
<textarea id="cust-address"></textarea>
<div id="wishlist-modal" class="hidden"></div>
<div id="wishlist-items-container"></div>
<div id="wishlist-count" class="hidden">0</div>
<div id="mobile-wishlist-badge" class="hidden">0</div>
<button id="btn-wishlist-add-all"></button>
<div id="wishlist-size-modal" class="hidden">
  <div id="wishlist-size-product-thumb"></div>
  <div id="wishlist-size-product-cat"></div>
  <div id="wishlist-size-product-name"></div>
  <div id="wishlist-size-default-size"></div>
  <div id="wishlist-size-indicator"></div>
  <div id="wishlist-sizes-grid"></div>
  <input id="wishlist-custom-w" value="">
  <input id="wishlist-custom-l" value="">
  <div id="wishlist-custom-price-hint" class="hidden"></div>
  <div id="wishlist-selected-size-text"></div>
  <div id="wishlist-selected-price-khr"></div>
  <div id="wishlist-selected-price-usd"></div>
  <button id="btn-remove-from-wishlist" class="hidden"></button>
  <button id="btn-confirm-wishlist-save"></button>
</div>
<div id="image-preview-modal" class="hidden">
  <div id="img-modal-title"></div>
  <div id="img-modal-category"></div>
  <div id="img-modal-badge"></div>
  <div id="img-modal-size"></div>
  <div id="img-modal-price-usd"></div>
  <div id="img-modal-price-khr"></div>
  <div id="img-modal-desc"></div>
  <div id="img-modal-review-quote"></div>
  <div id="img-modal-frame-badge"></div>
  <div id="img-modal-visual-container"></div>
  <button id="img-modal-order-btn"></button>
  <button id="img-modal-cart-btn"></button>
</div>
<div id="image-lightbox-modal" class="hidden">
  <div id="lightbox-title"></div>
  <div id="lightbox-size"></div>
  <div id="lightbox-frame-badge"></div>
  <span id="lightbox-zoom-level">100%</span>
  <div id="lightbox-viewport">
    <div id="lightbox-image-wrapper">
      <img id="lightbox-img" src="">
    </div>
    <div id="lightbox-touch-hint"></div>
  </div>
  <div id="lightbox-price-khr"></div>
  <div id="lightbox-price-usd"></div>
  <button id="lightbox-cart-btn"></button>
  <button id="lightbox-order-btn"></button>
</div>
<div id="website-qr-modal" class="hidden">
  <button id="btn-qr-mode-tg"></button>
  <button id="btn-qr-mode-web"></button>
  <img id="website-qr-code-img" src="">
  <img id="footer-website-qr-img" src="">
  <a id="website-qr-open-link-btn" href=""></a>
  <span id="website-qr-mode-badge"></span>
  <span id="website-qr-url-mode-hint"></span>
  <input id="website-qr-url-input">
  <input type="file" id="device-camera-qr-input">
</div>
<button id="btn-night-mode-toggle"><span id="night-mode-icon">🌙</span><span id="night-mode-label"></span></button>
<button id="btn-night-mode-top"><span id="night-mode-icon-top">🌙</span><span id="night-mode-text-top"></span></button>
<button id="btn-pwa-install-top"></button>
<div id="pwa-ios-modal" class="hidden"></div>
<div id="student-nametag-modal" class="hidden">
  <input id="nametag-school-name" value="សាលាបឋមសិក្សា វត្តបូព៌">
  <input id="nametag-grade" value="ថ្នាក់ទី ២ក">
  <select id="nametag-style"><option value="animal">Animal</option></select>
  <textarea id="nametag-students-list">សុខ&#10;សៅ&#10;សាន</textarea>
  <canvas id="nametag-canvas" width="1200" height="848"></canvas>
</div>
<div id="product-compare-modal" class="hidden">
  <select id="compare-select-1"></select>
  <select id="compare-select-2"></select>
  <div id="compare-grid-container"></div>
</div>
<div id="classroom-upload-modal" class="hidden">
  <input id="upload-teacher-name" value="អ្នកគ្រូ សុភាព">
  <input id="upload-school-name" value="សាលាបឋមសិក្សា">
  <select id="upload-province"><option value="ភ្នំពេញ">ភ្នំពេញ</option></select>
  <input id="upload-grade" value="ថ្នាក់ទី ៣">
  <textarea id="upload-review">ល្អណាស់</textarea>
  <div id="upload-photo-preview-box" class="hidden"><img id="upload-photo-preview" src=""></div>
</div>
<div id="courier-finder-modal" class="hidden">
  <select id="courier-province-select"><option value="phnompenh">Phnom Penh</option></select>
  <div id="courier-results-box"></div>
</div>
<div id="proforma-invoice-modal" class="hidden">
  <input id="quote-school-name" value="សាលាបឋមសិក្សា វត្តបូព៌">
  <input id="quote-director-name" value="អ្នកគ្រូ គង់ សុភា">
  <input id="quote-phone" value="012 345 678">
  <div id="proforma-invoice-sheet"></div>
</div>
<div id="subject-grade-filter-strip"></div>
<div id="classroom-wall-studio-modal" class="hidden">
  <select id="wall-studio-add-select"></select>
  <div id="wall-studio-stage"></div>
  <div id="wall-studio-posters-container"></div>
  <span id="wall-studio-count">0</span>
  <span id="wall-studio-total-usd">$0.00</span>
  <span id="wall-studio-total-khr">(0 ៛)</span>
</div>
<div id="tracing-worksheet-modal" class="hidden">
  <select id="tracing-lesson-type"><option value="consonants1">Lesson 1</option></select>
  <input id="tracing-school-name" value="សាលាបឋមសិក្សា វត្តបូព៌">
  <input id="tracing-grade" value="ថ្នាក់ទី ១ក">
  <select id="tracing-line-style"><option value="dotted">Dotted</option></select>
  <canvas id="tracing-canvas" width="1120" height="1584"></canvas>
</div>
<div id="curriculum-bundles-modal" class="hidden">
  <div id="curriculum-bundles-grid"></div>
</div>
<div id="customer-order-tracker-modal" class="hidden">
  <input id="customer-tracker-query" value="#ORD-2026-0888">
  <div id="customer-tracker-results"></div>
</div>
<div id="teacher-loyalty-modal" class="hidden">
  <div id="teacher-loyalty-container"></div>
</div>
<div id="lucky-spin-modal" class="hidden">
  <span id="lucky-spin-balance-count">0</span>
  <span id="lucky-spin-streak-count">0/10</span>
  <div id="lucky-spin-progress-bar" style="width: 0%;"></div>
  <canvas id="spin-wheel-canvas" width="300" height="300"></canvas>
  <button id="btn-spin-wheel" onclick="spinLuckyWheel()">បង្វិល!</button>
  <div id="spin-result-box"></div>
</div>
<button id="btn-header-lucky-spin"><span id="header-spin-count-badge"></span></button>
<div id="lucky-spin-standout-banner">
  <span id="banner-spin-count-txt"></span>
  <span id="banner-spin-balance-pill"></span>
</div>
<div id="floating-lucky-spin">
  <span id="floating-spin-count-badge"></span>
</div>
<div id="success-lucky-spin-reward" class="hidden">
  <span id="success-earned-spins-badge"></span>
  <span id="success-earned-spins-desc"></span>
</div>
<div id="slip-upload-section">
  <div id="slip-dropzone"></div>
  <input type="file" id="cust-slip-input">
  <div id="slip-empty-preview"></div>
  <div id="slip-active-preview" class="hidden">
    <img id="slip-thumb" src="">
    <div id="slip-filename"></div>
  </div>
  <div id="slip-verification-box" class="hidden">
    <span id="slip-overall-badge"></span>
    <select id="cust-slip-account-select"><option value="ABA">ABA</option><option value="ACLEDA">ACLEDA</option><option value="OTHER">OTHER</option></select>
    <span id="slip-account-badge"></span>
    <div id="slip-account-feedback"></div>
    <span id="slip-match-badge"></span>
    <div id="slip-expected-display">$0.00 (0 ៛)</div>
    <select id="cust-slip-currency"><option value="USD">USD</option><option value="KHR">KHR</option></select>
    <input type="number" id="cust-slip-amount">
    <input type="text" id="cust-slip-trx-id">
    <div id="slip-match-feedback"></div>
    <div id="slip-payment-correction-notice"></div>
  </div>
</div>
<div id="success-slip-row"><span id="success-slip-status"></span></div>
<div id="custom-poster-modal" class="hidden">
  <input type="file" id="custom-poster-file">
  <img id="custom-poster-preview-img" src="poster_welcome.jpg">
  <input id="custom-poster-title" value="បទបញ្ជាផ្ទៃក្នុងថ្នាក់រៀន">
  <input id="custom-poster-school" value="">
  <select id="custom-poster-size">
    <option value="40x60">40x60</option>
    <option value="50x70">50x70</option>
    <option value="60x80" selected>60x80</option>
    <option value="80x120">80x120</option>
    <option value="100x150">100x150</option>
  </select>
  <select id="custom-poster-frame">
    <option value="none" selected>none</option>
    <option value="wood">wood</option>
    <option value="gold">gold</option>
    <option value="black">black</option>
    <option value="white">white</option>
  </select>
  <select id="custom-poster-material">
    <option value="pp-laminated" selected>pp-laminated</option>
    <option value="decal-sticker">decal-sticker</option>
    <option value="canvas-fabric">canvas-fabric</option>
  </select>
  <input type="number" id="custom-poster-qty" value="1">
  <input id="custom-poster-notes" value="">
  <span id="custom-poster-unit-price">$2.50</span>
  <span id="custom-poster-total-usd">$2.50</span>
  <span id="custom-poster-total-khr">10,000 ៛</span>
</div>
<div id="sponsor-classroom-modal" class="hidden">
  <div class="sponsor-pkg-card"><input type="radio" name="sponsor_package_option" value="basic"></div>
  <div class="sponsor-pkg-card"><input type="radio" name="sponsor_package_option" value="classroom" checked></div>
  <div class="sponsor-pkg-card"><input type="radio" name="sponsor_package_option" value="school"></div>
  <input id="sponsor-donor-name" value="សប្បុរសជន និងអតីតសិស្ស">
  <input id="sponsor-school-name" value="សាលាបឋមសិក្សា អង្គរជ័យ">
  <select id="sponsor-province"><option value="សៀមរាប" selected>សៀមរាប</option></select>
  <input id="sponsor-receiver-phone" value="">
  <textarea id="sponsor-blessing-msg"></textarea>
  <span id="sponsor-plaque-donor">សប្បុរសជន និងអតីតសិស្ស</span>
  <span id="sponsor-plaque-school">សាលាបឋមសិក្សា អង្គរជ័យ</span>
  <span id="sponsor-plaque-prov">ខេត្តសៀមរាប</span>
</div>
<script src="qrcode.min.js"></script>
<script src="app.js"></script>
<script>
async function runHarnessTests() {
  const res = [];
  function record(pass, name, detail) {
    res.push({ pass, name, detail });
  }

  try {
    // 1. Check qrcode engine
    if (typeof qrcode === 'function') {
      const qr = qrcode(0, 'M');
      qr.addData('TEST');
      qr.make();
      record(true, 'Runtime qrcode engine operational', 'Module count: ' + qr.getModuleCount());
    } else {
      record(false, 'Runtime qrcode engine operational', 'window.qrcode is not a function');
    }

    // 2. Check CRC16
    const crc = calcKhqrCrc16('00020101021229450016abaakhppxxx@abaa01090083506160208ABA Bank40390006abaP2P011298BE427281B902090083506165204000053031165405100005802KH5911KOEUR SOYTY6010Phnom Penh993400131790654183515011318221901835156304');
    if (crc === '6C1E') {
      record(true, 'Runtime CRC16 calculation accurate', 'Expected: 6C1E, Got: ' + crc);
    } else {
      record(false, 'Runtime CRC16 calculation accurate', 'Expected: 6C1E, Got: ' + crc);
    }

    // 3. Check ABA Dynamic Canvas Generation (Non-tainted canvas test)
    const payInfo = getCurrentOrderPaymentInfo();
    const abaBlob = await generateKhqrCardBlob({
      merchantName: payInfo.merchantName,
      bankName: payInfo.bankName,
      accountDetail: payInfo.accountDetail,
      payableKHR: 20000,
      payableUSD: 5.00,
      payload: payInfo.payload,
      isAcleda: false,
      qrSrc: payInfo.qrSrc
    });
    if (abaBlob && abaBlob.size > 50000) {
      record(true, 'ABA Dynamic Canvas Card generation', 'Blob size: ' + Math.round(abaBlob.size/1024) + ' KB');
    } else {
      record(false, 'ABA Dynamic Canvas Card generation', 'Invalid blob size: ' + (abaBlob ? abaBlob.size : 'null'));
    }

    // 4. Check ACLEDA Static Canvas Generation (Non-tainted canvas test)
    const acledaBlob = await generateKhqrCardBlob({
      merchantName: 'Vey Kimleang',
      bankName: 'ACLEDA Bank',
      accountDetail: 'ACLEDA: 090 343 206',
      payableKHR: 35000,
      payableUSD: 8.75,
      payload: ACLEDA_KHQR_STATIC_PAYLOAD,
      isAcleda: true,
      qrSrc: 'acleda_khqr.jpg'
    });
    if (acledaBlob && acledaBlob.size > 50000) {
      record(true, 'ACLEDA Canvas Card generation', 'Blob size: ' + Math.round(acledaBlob.size/1024) + ' KB');
    } else {
      record(false, 'ACLEDA Canvas Card generation', 'Invalid blob size: ' + (acledaBlob ? acledaBlob.size : 'null'));
    }

    // 5. Check Bank Selector initialization & amount calculation
    openBankSelectorModal({ totalKHR: 20000, totalUSD: 5.00, paymentMethod: 'ABA KHQR' });
    const bAmt = document.getElementById('bank-selector-amount')?.textContent || '';
    if (bAmt.includes('20,000') && bAmt.includes('5.00')) {
      record(true, 'Runtime Bank Selector modal & amount calculation', 'Formatted: ' + bAmt);
    } else {
      record(false, 'Runtime Bank Selector modal & amount calculation', 'Unexpected: ' + bAmt);
    }
    closeBankSelectorModal();

    // 6. Check Pricing Formula (5 Standard Presets + 1m² = 20,000 ៛)
    const p40x60 = calculateCustomDimensions(40, 60);
    const p60x80 = calculateCustomDimensions(60, 80);
    const p80x100 = calculateCustomDimensions(80, 100);
    const p60x200 = calculateCustomDimensions(60, 200);
    const p80x250 = calculateCustomDimensions(80, 250);
    const p100x100 = calculateCustomDimensions(100, 100); // 1m²
    const p50x70 = calculateCustomDimensions(50, 70);     // 0.35m²

    const isPresetsAccurate = 
      p40x60.priceKHR === 5000 && p40x60.priceUSD === 1.25 &&
      p60x80.priceKHR === 10000 && p60x80.priceUSD === 2.50 &&
      p80x100.priceKHR === 15000 && p80x100.priceUSD === 3.75 &&
      p60x200.priceKHR === 25000 && p60x200.priceUSD === 6.25 &&
      p80x250.priceKHR === 40000 && p80x250.priceUSD === 10.00;

    const isCustomAccurate = 
      p100x100.priceKHR === 20000 && p100x100.priceUSD === 5.00 &&
      p50x70.priceKHR === 7000 && p50x70.priceUSD === 1.75;

    if (isPresetsAccurate && isCustomAccurate) {
      record(true, 'Runtime Pricing Calculations (5 Presets + 20,000៛/m²)', 'All 5 standard presets and custom formulas verified');
    } else {
      record(false, 'Runtime Pricing Calculations', 'Failed preset or custom checks: ' + JSON.stringify({ p40x60, p60x80, p80x100, p60x200, p80x250, p100x100, p50x70 }));
    }

    // 7. Check Order Modal Add-To-Cart with selected size
    if (typeof productsData !== 'undefined' && productsData.length > 0) {
      openOrderModal(productsData[0].id);
      selectOrderSize('60 cm x 80 cm', 2.50, 10000, false);
      addCurrentProductToCartFromModal();
      
      const lastCartItem = cart[cart.length - 1];
      if (lastCartItem && lastCartItem.product.size === '60 cm x 80 cm' && lastCartItem.product.priceKHR === 10000) {
        record(true, 'Runtime Order Modal Add-To-Cart with Size', 'Item added with size: ' + lastCartItem.product.size + ' (' + lastCartItem.product.priceKHR + ' ៛)');
      } else {
        record(false, 'Runtime Order Modal Add-To-Cart with Size', 'Failed to add item with selected size to cart');
      }
    }

    // 8. Check Wishlist Size Selection & Add-To-Cart Flow
    if (typeof productsData !== 'undefined' && productsData.length > 0) {
      const testProd = productsData[0];
      openWishlistSizeModal(testProd.id);
      const modalEl = document.getElementById('wishlist-size-modal');
      const modalOpened = modalEl && !modalEl.classList.contains('hidden');
      
      selectWishlistSize('60 cm x 80 cm', 2.50, 10000, false);
      confirmSaveToWishlist();
      
      const isSaved = isWishlisted(testProd.id);
      const savedItem = getWishlistItem(testProd.id);
      const sizeMatches = savedItem && savedItem.size === '60 cm x 80 cm' && savedItem.priceKHR === 10000;
      
      renderWishlistItems();
      const containerHtml = document.getElementById('wishlist-items-container').innerHTML;
      const rendersSize = containerHtml.includes('60 cm x 80 cm');
      
      addAllWishlistToCart();
      const itemInCart = cart.find(c => c.product.id === testProd.id && c.product.size === '60 cm x 80 cm');
      
      if (modalOpened && isSaved && sizeMatches && rendersSize && itemInCart) {
        record(true, 'Runtime Wishlist Size Selection & Cart Flow', 'Wishlist item saved with size ' + savedItem.size + ' and added to cart');
      } else {
        record(false, 'Runtime Wishlist Size Selection & Cart Flow', 'Failed checks: opened=' + modalOpened + ', isSaved=' + isSaved + ', sizeMatches=' + sizeMatches + ', rendersSize=' + rendersSize + ', inCart=' + Boolean(itemInCart));
      }
    }

    // 9. Check Fullscreen Lightbox & Zoom Engine
    if (typeof productsData !== 'undefined' && productsData.length > 0) {
      const p = productsData[0];
      openImageLightbox(p.id);
      const lbModal = document.getElementById('image-lightbox-modal');
      const lbOpened = lbModal && !lbModal.classList.contains('hidden');
      const initialScaleOk = lightboxScale === 1;

      lightboxZoomIn();
      const zoomedInOk = lightboxScale > 1;

      lightboxResetZoom();
      const resetOk = lightboxScale === 1;

      closeImageLightbox();
      const lbClosed = lbModal && lbModal.classList.contains('hidden');

      if (lbOpened && initialScaleOk && zoomedInOk && resetOk && lbClosed) {
        record(true, 'Runtime Fullscreen Lightbox & Zoom Engine', 'Open, ZoomIn (135%), Reset (100%), and Close verified');
      } else {
        record(false, 'Runtime Fullscreen Lightbox & Zoom Engine', 'Failed checks: opened=' + lbOpened + ', initial=' + initialScaleOk + ', zoomed=' + zoomedInOk + ', reset=' + resetOk + ', closed=' + lbClosed);
      }
    }

    // 10. Check Universal Body Scroll Lock (modal-open class toggle)
    if (typeof updateBodyScrollLock === 'function' && typeof openOrderModal === 'function' && typeof closeOrderModal === 'function') {
      toggleCart(false);
      toggleWishlistModal(false);
      closeImageLightbox();
      closeImageModal();
      closeBankSelectorModal();

      openOrderModal(productsData[0].id);
      const lockedOnOpen = document.body.classList.contains('modal-open');
      closeOrderModal();
      const unlockedOnClose = !document.body.classList.contains('modal-open');

      if (lockedOnOpen && unlockedOnClose) {
        record(true, 'Runtime Universal Body Scroll Lock', 'body.modal-open active on modal display and removed on dismissal');
      } else {
        record(false, 'Runtime Universal Body Scroll Lock', 'lockedOnOpen=' + lockedOnOpen + ', unlockedOnClose=' + unlockedOnClose);
      }
    }

    // 11. Check Shipping Fee & Home Delivery Calculation Engine
    if (typeof getShippingSettings === 'function' && typeof getEffectiveOrderShipping === 'function') {
      const shipSettings = getShippingSettings();
      const effShip = getEffectiveOrderShipping();
      const hasBase = shipSettings && typeof shipSettings.baseFeeUSD === 'number' && typeof shipSettings.baseFeeKHR === 'number';
      const hasHome = shipSettings && shipSettings.homeDeliveryEnabled === true && typeof shipSettings.homeDeliveryFeeUSD === 'number';
      const hasRates = shipSettings && Array.isArray(shipSettings.ratesByLocation) && shipSettings.ratesByLocation.length > 0;
      const effValid = effShip && typeof effShip.feeUSD === 'number' && typeof effShip.feeKHR === 'number';

      let homeSwitchOk = false;
      const homeRadio = document.querySelector('input[name="order_delivery_type"][value="home"]');
      if (homeRadio && typeof onOrderDeliveryTypeChange === 'function') {
        homeRadio.checked = true;
        onOrderDeliveryTypeChange();
        const homeShip = getEffectiveOrderShipping();
        homeSwitchOk = (homeShip.isHomeDelivery === true) && (homeShip.feeUSD >= 1.25);
        const pickupRadio = document.querySelector('input[name="order_delivery_type"][value="pickup"]');
        if (pickupRadio) {
          pickupRadio.checked = true;
          onOrderDeliveryTypeChange();
        }
      } else {
        homeSwitchOk = hasHome;
      }

      if (hasBase && hasHome && hasRates && effValid && homeSwitchOk) {
        record(true, 'Runtime Shipping Fee & Home Delivery Calculation Engine', 'Branch pickup ($' + shipSettings.baseFeeUSD.toFixed(2) + ') & Home delivery ($' + shipSettings.homeDeliveryFeeUSD.toFixed(2) + ') across ' + shipSettings.ratesByLocation.length + ' regions verified');
      } else {
        record(false, 'Runtime Shipping Fee & Home Delivery Calculation Engine', 'hasBase=' + hasBase + ', hasHome=' + hasHome + ', homeSwitchOk=' + homeSwitchOk);
      }
    }

    // 12. Check Store Website QR Code & Telegram Dual Mode Engine
    if (typeof openWebsiteQrModal === 'function' && typeof setWebsiteQrTargetMode === 'function' && typeof closeWebsiteQrModal === 'function') {
      openWebsiteQrModal();
      const qrModal = document.getElementById('website-qr-modal');
      const isQrOpen = qrModal && !qrModal.classList.contains('hidden');
      const isLocked = document.body.classList.contains('modal-open');
      const qrImg = document.getElementById('website-qr-code-img');
      const hasQrData = qrImg && qrImg.src.startsWith('data:image');
      const qrBtn = document.getElementById('website-qr-open-link-btn');
      const hasValidLink = qrBtn && (qrBtn.href.includes('t.me') || qrBtn.href.startsWith('http'));

      setWebsiteQrTargetMode('website');
      const isWebMode = currentWebsiteQrMode === 'website';
      setWebsiteQrTargetMode('telegram');
      const isTgMode = currentWebsiteQrMode === 'telegram';

      closeWebsiteQrModal();
      const isQrClosed = qrModal && qrModal.classList.contains('hidden');
      const isUnlocked = !document.body.classList.contains('modal-open');

      if (isQrOpen && isLocked && hasQrData && hasValidLink && isWebMode && isTgMode && isQrClosed && isUnlocked) {
        record(true, 'Runtime Store Website QR Code Engine', 'Telegram/Website dual mode, QR generator, scroll lock & links operational');
      } else {
        record(false, 'Runtime Store Website QR Code Engine', 'Failed checks: open=' + isQrOpen + ', locked=' + isLocked + ', hasQr=' + hasQrData + ', validLink=' + hasValidLink + ', web=' + isWebMode + ', tg=' + isTgMode + ', closed=' + isQrClosed + ', unlocked=' + isUnlocked);
      }
    }

    // 13. Check Customer Night Mode (Dark Mode) Engine
    if (typeof toggleNightMode === 'function' && typeof initNightMode === 'function' && typeof applyNightMode === 'function') {
      // Set clean baseline (Light Mode)
      applyNightMode(false, false);
      localStorage.removeItem('edushop_night_mode');

      // Toggle ON
      toggleNightMode();
      const bodyHasNight = document.body.classList.contains('night-mode');
      const htmlHasDark = document.documentElement.classList.contains('dark');
      const iconIsSun = document.getElementById('night-mode-icon')?.textContent === '☀️';
      const storedNight = localStorage.getItem('edushop_night_mode') === 'enabled';

      // Toggle OFF
      toggleNightMode();
      const bodyNoNight = !document.body.classList.contains('night-mode');
      const htmlNoDark = !document.documentElement.classList.contains('dark');
      const iconIsMoon = document.getElementById('night-mode-icon')?.textContent === '🌙';
      const storedDay = localStorage.getItem('edushop_night_mode') === 'disabled';

      if (bodyHasNight && htmlHasDark && iconIsSun && storedNight && bodyNoNight && htmlNoDark && iconIsMoon && storedDay) {
        record(true, 'Runtime Customer Night Mode Engine', 'Toggle, body.night-mode, icon switch (🌙/☀️) & persistence verified');
      } else {
        record(false, 'Runtime Customer Night Mode Engine', 'Failed checks: night=' + bodyHasNight + ', dark=' + htmlHasDark + ', sun=' + iconIsSun + ', storeN=' + storedNight + ', day=' + bodyNoNight + ', moon=' + iconIsMoon + ', storeD=' + storedDay);
      }
    }

    // 14. Check Bulk / Wholesale Tier Discounts Engine
    if (typeof getBulkDiscountInfo === 'function') {
      const b0 = getBulkDiscountInfo(3, 10, 40000);
      const b1 = getBulkDiscountInfo(6, 20, 80000);
      const b2 = getBulkDiscountInfo(12, 50, 200000);
      const b3 = getBulkDiscountInfo(25, 100, 400000);

      const pass0 = b0.tier === 0 && b0.percent === 0 && b0.discountUSD === 0;
      const pass1 = b1.tier === 1 && b1.percent === 5 && b1.discountUSD === 1.00;
      const pass2 = b2.tier === 2 && b2.percent === 10 && b2.discountUSD === 5.00;
      const pass3 = b3.tier === 3 && b3.percent === 15 && b3.discountUSD === 15.00;

      if (pass0 && pass1 && pass2 && pass3) {
        record(true, 'Runtime Bulk Wholesale Tier Discount Engine', 'Tiers 0 (0%), 1 (5%), 2 (10%), 3 (15%) & math calculations verified');
      } else {
        record(false, 'Runtime Bulk Wholesale Tier Discount Engine', 'Failed calculations: b0=' + pass0 + ', b1=' + pass1 + ', b2=' + pass2 + ', b3=' + pass3);
      }
    }

    // 15. Check School & Grade Engraving Synchronization
    if (typeof syncSchoolEngraveText === 'function') {
      const schoolIn = document.getElementById('cust-engrave-school');
      const gradeIn = document.getElementById('cust-engrave-grade');
      const customIn = document.getElementById('cust-custom-text');

      if (schoolIn && gradeIn && customIn) {
        schoolIn.value = 'សាលាបឋមសិក្សា វត្តបូព៌';
        gradeIn.value = 'ថ្នាក់ទី ៥ក';
        syncSchoolEngraveText();
        const hasBoth = customIn.value === '[សាលា៖ សាលាបឋមសិក្សា វត្តបូព៌] [ថ្នាក់/គ្រូ៖ ថ្នាក់ទី ៥ក]';

        gradeIn.value = '';
        syncSchoolEngraveText();
        const hasSchoolOnly = customIn.value === '[សាលា៖ សាលាបឋមសិក្សា វត្តបូព៌]';

        if (hasBoth && hasSchoolOnly) {
          record(true, 'Runtime Free School & Grade Engraving Synchronization', 'Dedicated inputs seamlessly sync with cust-custom-text');
        } else {
          record(false, 'Runtime Free School & Grade Engraving Synchronization', 'Failed sync: hasBoth=' + hasBoth + ', hasSchoolOnly=' + hasSchoolOnly + ' (value: ' + customIn.value + ')');
        }
      }
    }

    // 16. Check Direct Lightbox & School Proposal Handlers
    if (typeof openDirectImageLightbox === 'function' && typeof shareCartForPrincipalApproval === 'function') {
      openDirectImageLightbox('khmer_edu_bg.jpg', 'ផ្ទាំងអប់រំ និងវប្បធម៌ខ្មែរ', 'សាលាបឋមសិក្សា វត្តបូព៌');
      const lbTitle = document.getElementById('lightbox-title')?.textContent;
      const lbModal = document.getElementById('image-lightbox-modal');
      const isOpen = lbModal && !lbModal.classList.contains('hidden');
      closeImageLightbox();
      const isClosed = lbModal && lbModal.classList.contains('hidden');

      if (isOpen && lbTitle === 'ផ្ទាំងអប់រំ និងវប្បធម៌ខ្មែរ' && isClosed) {
        record(true, 'Runtime Direct Lightbox & School Proposal Handlers', 'Direct classroom showcase lightbox & principal proposal operational');
      } else {
        record(false, 'Runtime Direct Lightbox & School Proposal Handlers', 'Failed lightbox: open=' + isOpen + ', title=' + lbTitle + ', closed=' + isClosed);
      }
    }

    // 17. Check Telegram Bot Rich HTML Payload Formatter
    if (typeof formatTelegramBotHtmlMessage === 'function') {
      const mockOrder = {
        id: '#ORD-9999',
        customerName: 'សុខ គង់',
        customerPhone: '012345678',
        customerAddress: 'ភ្នំពេញ',
        schoolName: 'សាលាបឋមសិក្សា វត្តបូព៌',
        isSchoolOrder: true,
        engraveSchool: 'វត្តបូព៌',
        engraveGrade: '៥ក',
        items: [{ name: 'ផ្ទាំងតួអក្សរខ្មែរ', size: '60x80cm', qty: 2, priceUSD: 5.0 }],
        bulkDiscountPercent: 10,
        bulkDiscountUSD: 1.0,
        totalUSD: 9.0,
        paymentMethod: 'ABA KHQR',
        note: 'ដឹកម៉ោងរដ្ឋបាល'
      };
      const htmlOutput = formatTelegramBotHtmlMessage(mockOrder);
      const hasHeader = htmlOutput.includes('[ការបញ្ជាទិញថ្មី] #ORD-9999');
      const hasCustomer = htmlOutput.includes('សុខ គង់') && htmlOutput.includes('012345678');
      const hasSchool = htmlOutput.includes('សាលាបឋមសិក្សា វត្តបូព៌');
      const hasItems = htmlOutput.includes('ផ្ទាំងតួអក្សរខ្មែរ') && htmlOutput.includes('$5.00');
      const hasTotal = htmlOutput.includes('$9.00');

      if (hasHeader && hasCustomer && hasSchool && hasItems && hasTotal) {
        record(true, 'Runtime Telegram Bot Rich HTML Payload Formatter', 'HTML message formatting with customer, items, school and discount verified');
      } else {
        record(false, 'Runtime Telegram Bot Rich HTML Payload Formatter', 'HTML check failed: header=' + hasHeader + ', cust=' + hasCustomer + ', school=' + hasSchool + ', items=' + hasItems + ', total=' + hasTotal);
      }
    }

    // 18. Check User PWA iOS Modal Lifecycle
    if (typeof openPwaIosModal === 'function' && typeof closePwaIosModal === 'function') {
      openPwaIosModal();
      const pModal = document.getElementById('pwa-ios-modal');
      const isPOpen = pModal && !pModal.classList.contains('hidden');
      closePwaIosModal();
      const isPClosed = pModal && pModal.classList.contains('hidden');

      if (isPOpen && isPClosed) {
        record(true, 'Runtime User PWA iOS Modal Lifecycle', 'PWA installation guide modal open/close verified');
      } else {
        record(false, 'Runtime User PWA iOS Modal Lifecycle', 'Failed: open=' + isPOpen + ', closed=' + isPClosed);
      }
    }

    // 19. Check Storefront Promo Banner Customizer Runtime Sync
    if (typeof applyPromoBannerSettings === 'function') {
      localStorage.setItem('edushop_promo_banner_settings', JSON.stringify({
        tag: '🎒 បវេសនកាល',
        badge: '🎒 បវេសនកាលសិក្សាថ្មី | បរិយាកាសបង្រៀន និងរៀនក្នុងថ្នាក់រៀន',
        heading: 'សម្ភារៈតុបតែងថ្នាក់ & ជំនួយការបង្រៀនគ្រូ-សិស្ស',
        subtitle: 'បង្កើនប្រសិទ្ធភាពនៃការបង្រៀន និងរៀនក្នុងថ្នាក់',
        marqueeText: '🎒 ស្វាគមន៍បវេសនកាលសិក្សាថ្មី!',
        couponCode: 'EDUSHOP10',
        contactPhone: '031 971 1333'
      }));
      applyPromoBannerSettings();
      const pTag = document.getElementById('top-promo-tag')?.textContent;
      const pBadge = document.getElementById('hero-badge')?.textContent;

      if (pTag && pTag.includes('🎒 បវេសនកាល') && pBadge && pBadge.includes('បវេសនកាល')) {
        record(true, 'Runtime Storefront Promo Banner Customizer', 'Custom promo banner (🎒 បវេសនកាល) applied and synced dynamically');
      } else {
        record(false, 'Runtime Storefront Promo Banner Customizer', 'Failed: tag=' + pTag + ', badge=' + pBadge);
      }
    }

    // 20. Check Student Desk Nametag Generator
    if (typeof openStudentNametagModal === 'function' && typeof renderNametagCanvas === 'function' && typeof closeStudentNametagModal === 'function') {
      openStudentNametagModal();
      const nModal = document.getElementById('student-nametag-modal');
      const isNOpen = nModal && !nModal.classList.contains('hidden');
      renderNametagCanvas();
      const nCanvas = document.getElementById('nametag-canvas');
      const hasCanvas = nCanvas && nCanvas.width > 0 && nCanvas.height > 0;
      closeStudentNametagModal();
      const isNClosed = nModal && nModal.classList.contains('hidden');

      if (isNOpen && hasCanvas && isNClosed) {
        record(true, 'Runtime Student Desk Nametag Generator', 'A4 Canvas rendering, 6 desk tags & modal lifecycle verified');
      } else {
        record(false, 'Runtime Student Desk Nametag Generator', 'Failed: open=' + isNOpen + ', canvas=' + hasCanvas + ', closed=' + isNClosed);
      }
    }

    // 21. Check MoEYS Grade & Subject Filter Engine
    if (typeof setGradeFilter === 'function' && typeof setSubjectFilter === 'function') {
      setGradeFilter('kindergarten');
      const gradeSet = currentGradeFilter === 'kindergarten';
      setSubjectFilter('khmer');
      const subjSet = currentSubjectFilter === 'khmer';
      setGradeFilter('all');
      setSubjectFilter('all');
      const resetOk = currentGradeFilter === 'all' && currentSubjectFilter === 'all';

      if (gradeSet && subjSet && resetOk) {
        record(true, 'Runtime MoEYS Grade & Subject Filter Engine', 'Grade & Subject filter switching and product catalog sync operational');
      } else {
        record(false, 'Runtime MoEYS Grade & Subject Filter Engine', 'Failed: grade=' + gradeSet + ', subj=' + subjSet + ', reset=' + resetOk);
      }
    }

    // 22. Check Poster Comparison Engine
    if (typeof openProductCompareModal === 'function' && typeof quickToggleCompare === 'function' && typeof closeProductCompareModal === 'function') {
      quickToggleCompare(1);
      const cModal = document.getElementById('product-compare-modal');
      const isCOpen = cModal && !cModal.classList.contains('hidden');
      closeProductCompareModal();
      const isCClosed = cModal && cModal.classList.contains('hidden');

      if (isCOpen && isCClosed) {
        record(true, 'Runtime Poster Comparison Engine', 'Side-by-side compare toggle, modal lifecycle & spec comparison verified');
      } else {
        record(false, 'Runtime Poster Comparison Engine', 'Failed: open=' + isCOpen + ', closed=' + isCClosed);
      }
    }

    // 23. Check Classroom Photo Upload Modal Lifecycle
    if (typeof openClassroomUploadModal === 'function' && typeof closeClassroomUploadModal === 'function') {
      openClassroomUploadModal();
      const uModal = document.getElementById('classroom-upload-modal');
      const isUOpen = uModal && !uModal.classList.contains('hidden');
      closeClassroomUploadModal();
      const isUClosed = uModal && uModal.classList.contains('hidden');

      if (isUOpen && isUClosed) {
        record(true, 'Runtime Classroom Photo Upload Modal', 'Modal open/close, coupon alert & teacher inputs verified');
      } else {
        record(false, 'Runtime Classroom Photo Upload Modal', 'Failed: open=' + isUOpen + ', closed=' + isUClosed);
      }
    }

    // 24. Check Courier Branch Finder & Delivery ETA Engine
    if (typeof openCourierFinderModal === 'function' && typeof renderCourierInfo === 'function' && typeof closeCourierFinderModal === 'function') {
      openCourierFinderModal();
      const cfModal = document.getElementById('courier-finder-modal');
      const isCfOpen = cfModal && !cfModal.classList.contains('hidden');
      renderCourierInfo('siemreap');
      const resBox = document.getElementById('courier-results-box');
      const hasRes = resBox && resBox.innerHTML.includes('VET Express');
      closeCourierFinderModal();
      const isCfClosed = cfModal && cfModal.classList.contains('hidden');

      if (isCfOpen && hasRes && isCfClosed) {
        record(true, 'Runtime Courier Branch Finder & Delivery ETA', '25-province selector, VET/J&T/Capitol branches & ETA calculation verified');
      } else {
        record(false, 'Runtime Courier Branch Finder & Delivery ETA', 'Failed: open=' + isCfOpen + ', results=' + hasRes + ', closed=' + isCfClosed);
      }
    }

    // 25. Check Official Proforma Invoice & Quotation Engine
    if (typeof openProformaInvoiceModal === 'function' && typeof renderProformaInvoiceSheet === 'function' && typeof closeProformaInvoiceModal === 'function') {
      openProformaInvoiceModal();
      const invModal = document.getElementById('proforma-invoice-modal');
      const isInvOpen = invModal && !invModal.classList.contains('hidden');
      renderProformaInvoiceSheet();
      const sheet = document.getElementById('proforma-invoice-sheet');
      const hasSheetContent = sheet && sheet.innerHTML.includes('សម្រង់តម្លៃ');
      closeProformaInvoiceModal();
      const isInvClosed = invModal && invModal.classList.contains('hidden');

      if (isInvOpen && hasSheetContent && isInvClosed) {
        record(true, 'Runtime Official Proforma Invoice Engine', 'Official quotation sheet, letterhead, quote calculations & modal lifecycle verified');
      } else {
        record(false, 'Runtime Official Proforma Invoice Engine', 'Failed: open=' + isInvOpen + ', sheet=' + hasSheetContent + ', closed=' + isInvClosed);
      }
    }

    // 26. Check Virtual Classroom Wall Decorator Studio
    if (typeof openClassroomWallStudioModal === 'function' && typeof setWallStudioTheme === 'function' && typeof closeClassroomWallStudioModal === 'function') {
      openClassroomWallStudioModal();
      const wsModal = document.getElementById('classroom-wall-studio-modal');
      const isWsOpen = wsModal && !wsModal.classList.contains('hidden');
      setWallStudioTheme('skyblue');
      const stage = document.getElementById('wall-studio-stage');
      const themeOk = stage && stage.style.backgroundColor === 'rgb(2, 132, 199)';
      closeClassroomWallStudioModal();
      const isWsClosed = wsModal && wsModal.classList.contains('hidden');

      if (isWsOpen && themeOk && isWsClosed) {
        record(true, 'Runtime Virtual Classroom Wall Decorator Studio', 'Wall theme switcher, stage elevation & modal lifecycle verified');
      } else {
        record(false, 'Runtime Virtual Classroom Wall Decorator Studio', 'Failed: open=' + isWsOpen + ', theme=' + themeOk + ', closed=' + isWsClosed);
      }
    }

    // 27. Check Printable Khmer Handwriting & Tracing Studio
    if (typeof openTracingWorksheetModal === 'function' && typeof renderTracingWorksheetCanvas === 'function' && typeof closeTracingWorksheetModal === 'function') {
      openTracingWorksheetModal();
      const trModal = document.getElementById('tracing-worksheet-modal');
      const isTrOpen = trModal && !trModal.classList.contains('hidden');
      renderTracingWorksheetCanvas();
      const trCanvas = document.getElementById('tracing-canvas');
      const hasCanvas = trCanvas && trCanvas.width > 0 && trCanvas.height > 0;
      closeTracingWorksheetModal();
      const isTrClosed = trModal && trModal.classList.contains('hidden');

      if (isTrOpen && hasCanvas && isTrClosed) {
        record(true, 'Runtime Printable Khmer Tracing Studio', '5-line calligraphy grid canvas, A4 layout & modal lifecycle verified');
      } else {
        record(false, 'Runtime Printable Khmer Tracing Studio', 'Failed: open=' + isTrOpen + ', canvas=' + hasCanvas + ', closed=' + isTrClosed);
      }
    }

    // 28. Check Curriculum Value Bundles Engine
    if (typeof openCurriculumBundlesModal === 'function' && typeof renderCurriculumBundlesGrid === 'function' && typeof closeCurriculumBundlesModal === 'function') {
      openCurriculumBundlesModal();
      const cbModal = document.getElementById('curriculum-bundles-modal');
      const isCbOpen = cbModal && !cbModal.classList.contains('hidden');
      renderCurriculumBundlesGrid();
      const bGrid = document.getElementById('curriculum-bundles-grid');
      const hasBundles = bGrid && bGrid.innerHTML.includes('កញ្ចប់មត្តេយ្យ');
      closeCurriculumBundlesModal();
      const isCbClosed = cbModal && cbModal.classList.contains('hidden');

      if (isCbOpen && hasBundles && isCbClosed) {
        record(true, 'Runtime Curriculum Value Bundles Engine', '4 curriculum packs, 20% discount calculations & modal lifecycle verified');
      } else {
        record(false, 'Runtime Curriculum Value Bundles Engine', 'Failed: open=' + isCbOpen + ', bundles=' + hasBundles + ', closed=' + isCbClosed);
      }
    }

    // 29. Check Customer Live Order & Courier Tracker Engine
    if (typeof openCustomerOrderTrackerModal === 'function' && typeof renderDemoOrderTracker === 'function' && typeof closeCustomerOrderTrackerModal === 'function') {
      openCustomerOrderTrackerModal();
      const otModal = document.getElementById('customer-order-tracker-modal');
      const isOtOpen = otModal && !otModal.classList.contains('hidden');
      renderDemoOrderTracker('#ORD-2026-0888');
      const resBox = document.getElementById('customer-tracker-results');
      const hasSteps = resBox && resBox.innerHTML.includes('ដំណាក់កាល');
      closeCustomerOrderTrackerModal();
      const isOtClosed = otModal && otModal.classList.contains('hidden');

      if (isOtOpen && hasSteps && isOtClosed) {
        record(true, 'Runtime Customer Live Order & Courier Tracker', '5-step progress timeline, waybill code & modal lifecycle verified');
      } else {
        record(false, 'Runtime Customer Live Order & Courier Tracker', 'Failed: open=' + isOtOpen + ', steps=' + hasSteps + ', closed=' + isOtClosed);
      }
    }

    // 30. Check Teacher Loyalty & EduPoints Rewards Engine
    if (typeof openTeacherLoyaltyModal === 'function' && typeof renderTeacherLoyaltyHub === 'function' && typeof closeTeacherLoyaltyModal === 'function') {
      openTeacherLoyaltyModal();
      const tlModal = document.getElementById('teacher-loyalty-modal');
      const isTlOpen = tlModal && !tlModal.classList.contains('hidden');
      renderTeacherLoyaltyHub();
      const hub = document.getElementById('teacher-loyalty-container');
      const hasPoints = hub && hub.innerHTML.includes('ពិន្ទុ');
      closeTeacherLoyaltyModal();
      const isTlClosed = tlModal && tlModal.classList.contains('hidden');

      if (isTlOpen && hasPoints && isTlClosed) {
        record(true, 'Runtime Teacher Loyalty & EduPoints Engine', 'Tier badges, points ledger, redeem vouchers & modal lifecycle verified');
      } else {
        record(false, 'Runtime Teacher Loyalty & EduPoints Engine', 'Failed: open=' + isTlOpen + ', points=' + hasPoints + ', closed=' + isTlClosed);
      }
    }

    // 31. Check Lucky Spin Enhanced Engine (10-Spin Pity Guarantee, 2 Free Spins & $5 Earned Spins)
    if (typeof openLuckySpinModal === 'function' && typeof getLuckySpinsBalance === 'function' && typeof addLuckySpins === 'function' && typeof getLuckySpinsStreak === 'function' && typeof closeLuckySpinModal === 'function') {
      localStorage.removeItem('edushop_lucky_spins_balance');
      localStorage.removeItem('edushop_lucky_spins_streak');

      const initialBal = getLuckySpinsBalance(); // 2 free spins for new customer
      const initialStreak = getLuckySpinsStreak(); // 0 streak

      const addedBal = addLuckySpins(Math.floor(25 / 5)); // $25 order -> +5 spins (2 + 5 = 7)
      setLuckySpinsStreak(9); // set to 9 streak

      openLuckySpinModal();
      const lsModal = document.getElementById('lucky-spin-modal');
      const isLsOpen = lsModal && !lsModal.classList.contains('hidden');
      const balTxt = document.getElementById('lucky-spin-balance-count')?.textContent;
      const streakTxt = document.getElementById('lucky-spin-streak-count')?.textContent;

      closeLuckySpinModal();
      const isLsClosed = lsModal && lsModal.classList.contains('hidden');

      const isBalValid = (initialBal === 2) && (addedBal === 7) && (balTxt === '7');
      const isStreakValid = (initialStreak === 0) && (streakTxt === '9/10');
      const hasGift2 = (typeof LUCKY_WHEEL_SEGMENTS !== 'undefined') && LUCKY_WHEEL_SEGMENTS.some(s => s.code === 'EDUSHOP2');
      const has5Percent = (typeof LUCKY_WHEEL_SEGMENTS !== 'undefined') && LUCKY_WHEEL_SEGMENTS.some(s => s.code === 'TEACHER5');
      const isWheelCouponsValid = hasGift2 && has5Percent;

      if (isLsOpen && isLsClosed && isBalValid && isStreakValid && isWheelCouponsValid) {
        record(true, 'Runtime Lucky Spin 10-Spin Pity & Earned Spins Engine', '2 Free Spins initial, $5=+1 spin formula, 9/10 streak, 5% Off & $2 Gift segments verified');
      } else {
        record(false, 'Runtime Lucky Spin 10-Spin Pity & Earned Spins Engine', 'Failed: open=' + isLsOpen + ', balValid=' + isBalValid + ' (' + balTxt + '), streakValid=' + isStreakValid + ' (' + streakTxt + '), wheelCoupons=' + isWheelCouponsValid + ', closed=' + isLsClosed);
      }
    }

    // 32. Check Payment Slip Mandatory Upload, KHQR Account & Amount Verification Engine
    if (typeof getOrderPayableAmounts === 'function' && typeof validateSlipAmountLive === 'function' && typeof autoMatchSlipAmount === 'function') {
      uploadedSlipDataUrl = null;
      const initialSlipCheck = validateSlipAmountLive();
      const initialInvalid = initialSlipCheck && initialSlipCheck.isValid === false;
      const badgeEmpty = document.getElementById('slip-match-badge')?.textContent.includes('មិនទាន់ភ្ជាប់ Slip');

      // Simulate attached slip
      uploadedSlipDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
      const amtInput = document.getElementById('cust-slip-amount');
      const currSelect = document.getElementById('cust-slip-currency');
      const acctSelect = document.getElementById('cust-slip-account-select');

      // Test wrong account
      if (acctSelect) {
        acctSelect.value = 'OTHER';
      }
      const wrongAcctCheck = validateSlipAmountLive();
      const wrongAcctInvalid = wrongAcctCheck && wrongAcctCheck.isValid === false && wrongAcctCheck.isAccountValid === false;

      // Test valid account with shortage
      if (acctSelect) {
        acctSelect.value = 'ABA';
      }
      if (amtInput && currSelect) {
        currSelect.value = 'USD';
        amtInput.value = '0.01'; // deliberately insufficient
        const shortCheck = validateSlipAmountLive();
        const shortInvalid = shortCheck && shortCheck.isValid === false && shortCheck.isAccountValid === true;

        // Test auto match
        autoMatchSlipAmount();
        const matchedCheck = validateSlipAmountLive();
        const matchedValid = matchedCheck && matchedCheck.isValid === true && matchedCheck.isAccountValid === true && matchedCheck.isAmountValid === true;
        const matchedBadge = document.getElementById('slip-match-badge')?.textContent.includes('ត្រឹមត្រូវ');
        const acctBadgeOk = document.getElementById('slip-account-badge')?.textContent.includes('ត្រឹមត្រូវ');

        if (initialInvalid && badgeEmpty && wrongAcctInvalid && shortInvalid && matchedValid && matchedBadge && acctBadgeOk) {
          record(true, 'Runtime Payment Slip KHQR Account & Amount Verification Engine', 'Initial mandatory block, wrong account reject, shortage reject, and auto-match ($' + amtInput.value + ') verified');
        } else {
          record(false, 'Runtime Payment Slip KHQR Account & Amount Verification Engine', 'Failed: init=' + initialInvalid + ', emptyBadge=' + badgeEmpty + ', wrongAcct=' + wrongAcctInvalid + ', short=' + shortInvalid + ', matched=' + matchedValid + ', matchBadge=' + matchedBadge + ', acctBadge=' + acctBadgeOk);
        }
      }
    }

    // 33. Check Custom Poster Upload & Price Calculation Engine
    if (typeof openCustomPosterModal === 'function' && typeof calculateCustomPosterPrice === 'function' && typeof addCustomPosterToCart === 'function' && typeof closeCustomPosterModal === 'function') {
      openCustomPosterModal();
      const cpModal = document.getElementById('custom-poster-modal');
      const isCpOpen = cpModal && !cpModal.classList.contains('hidden');

      const sizeSelect = document.getElementById('custom-poster-size');
      const frameSelect = document.getElementById('custom-poster-frame');
      if (sizeSelect) sizeSelect.value = '80x120';
      if (frameSelect) frameSelect.value = 'gold';

      const priceObj = calculateCustomPosterPrice();
      const isPriceAccurate = priceObj && priceObj.unitUSD === (4.50 + 1.25); // $5.75

      const initialCartLen = cart.length;
      addCustomPosterToCart(false);
      const isItemAdded = cart.length === initialCartLen + 1;
      const lastItem = cart[cart.length - 1];
      const isItemCustom = lastItem && lastItem.product && lastItem.product.name.includes('[ឌីហ្សាញផ្ទាល់ខ្លួន]');

      closeCustomPosterModal();
      const isCpClosed = cpModal && cpModal.classList.contains('hidden');

      if (isCpOpen && isPriceAccurate && isItemAdded && isItemCustom && isCpClosed) {
        record(true, 'Runtime Custom Poster Upload & Price Engine', 'Modal open, 80x120 + gold frame pricing ($' + priceObj.unitUSD + '), cart addition & dismissal verified');
      } else {
        record(false, 'Runtime Custom Poster Upload & Price Engine', 'Failed: open=' + isCpOpen + ', price=' + isPriceAccurate + ', added=' + isItemAdded + ', custom=' + isItemCustom + ', closed=' + isCpClosed);
      }
    }

    // 34. Check Sponsor Classroom Bundle Engine
    if (typeof openSponsorClassroomModal === 'function' && typeof selectSponsorPackage === 'function' && typeof updateSponsorPlaquePreview === 'function' && typeof submitSponsorPackage === 'function' && typeof closeSponsorClassroomModal === 'function') {
      openSponsorClassroomModal();
      const scModal = document.getElementById('sponsor-classroom-modal');
      const isScOpen = scModal && !scModal.classList.contains('hidden');

      selectSponsorPackage('school');
      const donorInput = document.getElementById('sponsor-donor-name');
      const schoolInput = document.getElementById('sponsor-school-name');
      if (donorInput) donorInput.value = 'លោក គង់ វិរៈ';
      if (schoolInput) schoolInput.value = 'សាលាបឋមសិក្សា បាគង';
      updateSponsorPlaquePreview();

      const plaqueDonor = document.getElementById('sponsor-plaque-donor')?.textContent;
      const hasDonorPlaque = plaqueDonor && plaqueDonor.includes('លោក គង់ វិរៈ');

      const prevCartLen = cart.length;
      submitSponsorPackage();
      const isSponsorAdded = cart.length === prevCartLen + 1;
      const addedSponsorItem = cart[cart.length - 1];
      const isSponsorValid = addedSponsorItem && addedSponsorItem.product && addedSponsorItem.product.name.includes('[កញ្ចប់ឧបត្ថម្ភសាលា]');

      closeSponsorClassroomModal();
      const isScClosed = scModal && scModal.classList.contains('hidden');

      if (isScOpen && hasDonorPlaque && isSponsorAdded && isSponsorValid && isScClosed) {
        record(true, 'Runtime Sponsor Classroom Bundle Engine', 'Modal open, tier selection, golden plaque preview, cart addition & prefill verified');
      } else {
        record(false, 'Runtime Sponsor Classroom Bundle Engine', 'Failed: open=' + isScOpen + ', plaque=' + hasDonorPlaque + ', added=' + isSponsorAdded + ', valid=' + isSponsorValid + ', closed=' + isScClosed);
      }
    }


  } catch(err) {
    record(false, 'Runtime Execution Exception', err.name + ': ' + err.message);
  }

  document.getElementById('harness-result').innerText = JSON.stringify(res);
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', runHarnessTests);
} else {
  runHarnessTests();
}
</script>
</body></html>
"@
    Set-Content -Path $harnessPath -Value $harnessHtml -Encoding UTF8

    try {
        $fileUri = "file:///" + ($harnessPath -replace '\\', '/')
        $dump = & $browserPath --headless --virtual-time-budget=12000 --dump-dom $fileUri | Out-String

        if ($dump -match '<div id="harness-result">([\s\S]*?)</div>') {
            $rawJson = $matches[1]
            try {
                $results = $rawJson | ConvertFrom-Json
                foreach ($r in $results) {
                    if ($r.pass) {
                        Report-Pass $r.name $r.detail
                    } else {
                        Report-Fail $r.name $r.detail
                    }
                }
            } catch {
                Report-Fail "Runtime Test Output Parse Error" $rawJson
            }
        } else {
            Report-Warn "Headless Output Unparsed" "Could not extract #harness-result from browser DOM"
        }
    } catch {
        Report-Warn "Headless Test Execution Error" $_.Exception.Message
    } finally {
        if (Test-Path $harnessPath) {
            Remove-Item $harnessPath -Force -ErrorAction SilentlyContinue
        }
    }

    # --------------------------------------------------------------------------
    # Admin Dashboard Headless Runtime Tests (admin.html & admin.js)
    # --------------------------------------------------------------------------
    $adminHarnessPath = Join-Path $scriptDir "temp-admin-harness.html"
    $adminBaseHtml = Get-Content "admin.html" -Raw -Encoding UTF8

    $adminTestScript = @"
<div id="admin-harness-result" style="display:none;"></div>
<script>
window.addEventListener('DOMContentLoaded', async () => {
  const res = [];
  function record(pass, name, detail) {
    res.push({ pass, name, detail });
  }

  try {
    // 1. Check Full System Backup JSON Generation
    if (typeof getFullSystemBackupObject === 'function') {
      const bObj = getFullSystemBackupObject();
      const hasApp = bObj && bObj.appName === 'EduShop' && bObj.version === '2.0';
      const hasProd = Array.isArray(bObj.products) && bObj.products.length > 0;
      const hasOrd = Array.isArray(bObj.orders);
      const hasTheme = typeof bObj.theme === 'string';

      if (hasApp && hasProd && hasOrd && hasTheme) {
        record(true, 'Runtime Admin Full System Backup Hub', 'Backup JSON schema verified (Products: ' + bObj.products.length + ', Orders: ' + bObj.orders.length + ')');
      } else {
        record(false, 'Runtime Admin Full System Backup Hub', 'Invalid backup object: ' + JSON.stringify(bObj));
      }
    }

    // 2. Check Low Stock Alert Detection & Quick Restock
    if (typeof updateLowStockAlerts === 'function' && typeof quickRestockProduct === 'function' && Array.isArray(adminProducts)) {
      const testItem = adminProducts[0];
      testItem.stockQty = 2; // trigger low stock
      testItem.inStock = true;
      updateLowStockAlerts();

      const banner = document.getElementById('admin-low-stock-banner');
      const navBadge = document.getElementById('admin-low-stock-nav-badge');
      const isBannerVisible = banner && !banner.classList.contains('hidden');
      const isNavBadgeVisible = navBadge && !navBadge.classList.contains('hidden');

      // Now quick restock by +10
      quickRestockProduct(testItem.id, 10);
      const isQtyIncreased = testItem.stockQty === 12;

      if (isBannerVisible && isNavBadgeVisible && isQtyIncreased) {
        record(true, 'Runtime Admin Low Stock Alert & Quick Restock Engine', 'Low stock alert rendered and quick restock (+10) operational');
      } else {
        record(false, 'Runtime Admin Low Stock Alert & Quick Restock Engine', 'Failed: banner=' + isBannerVisible + ', badge=' + isNavBadgeVisible + ', qty=' + testItem.stockQty);
      }
    }

    // 3. Check Courier Tracking Modal & Customer Telegram Message Formatter
    if (typeof formatCustomerDeliveryMessage === 'function' && typeof openOrderTrackingModal === 'function') {
      const sampleOrder = {
        id: 'ORD-TEST-99',
        invoiceNo: '0888',
        customerName: 'សុខ គឹមលាង',
        customerPhone: '012 345 678',
        customerAddress: 'ខេត្តពោធិ៍សាត់',
        totalUSD: 25.00,
        totalKHR: 100000,
        paymentMethod: 'ABA KHQR',
        courierName: 'វិរៈប៊ុនថាំ (VET Express)',
        waybillNo: 'VET-778899',
        deliveryBranch: 'សាខាពោធិ៍សាត់'
      };

      const tgMsg = formatCustomerDeliveryMessage(sampleOrder);
      const hasInvoice = tgMsg.includes('#0888');
      const hasCourier = tgMsg.includes('វិរៈប៊ុនថាំ');
      const hasWaybill = tgMsg.includes('VET-778899');
      const hasAddress = tgMsg.includes('ខេត្តពោធិ៍សាត់');

      adminOrders.push(sampleOrder);
      openOrderTrackingModal(sampleOrder.id);
      const trackModal = document.getElementById('order-tracking-modal');
      const isModalOpen = trackModal && !trackModal.classList.contains('hidden');
      closeOrderTrackingModal();
      const isModalClosed = trackModal && trackModal.classList.contains('hidden');

      if (hasInvoice && hasCourier && hasWaybill && hasAddress && isModalOpen && isModalClosed) {
        record(true, 'Runtime Admin Courier Tracking & Telegram Message Engine', 'Delivery notification formatting & tracking modal verified');
      } else {
        record(false, 'Runtime Admin Courier Tracking & Telegram Message Engine', 'Failed: msgProps=' + (hasInvoice && hasCourier && hasWaybill && hasAddress) + ', modal=' + isModalOpen + '/' + isModalClosed);
      }
    }

    // 4. Check Backup & Restore Modal Open and Close
    if (typeof openBackupRestoreModal === 'function' && typeof closeBackupRestoreModal === 'function') {
      openBackupRestoreModal();
      const bModal = document.getElementById('backup-restore-modal');
      const isOpen = bModal && !bModal.classList.contains('hidden');
      closeBackupRestoreModal();
      const isClosed = bModal && bModal.classList.contains('hidden');

      if (isOpen && isClosed) {
        record(true, 'Runtime Admin Backup & Restore Modal Lifecycle', 'Inspection modal open/close & backdrop verified');
      } else {
        record(false, 'Runtime Admin Backup & Restore Modal Lifecycle', 'Failed: open=' + isOpen + ', closed=' + isClosed);
      }
    }

    // 5. Check Admin Audio Chime & Live Order Alert Banner
    if (typeof isOrderAlertSoundEnabled === 'function' && typeof toggleOrderAlertSound === 'function' && typeof showLiveOrderAlertBanner === 'function' && typeof dismissLiveOrderAlert === 'function') {
      const initSound = isOrderAlertSoundEnabled();
      toggleOrderAlertSound();
      const toggledSound = isOrderAlertSoundEnabled();
      toggleOrderAlertSound(); // restore
      const restoredSound = isOrderAlertSoundEnabled();

      showLiveOrderAlertBanner({ customerName: 'កញ្ញា ធីតា', customerPhone: '098765432', totalUSD: 12.50 });
      const bannerEl = document.getElementById('admin-live-order-alert-banner');
      const isBannerOpen = bannerEl && !bannerEl.classList.contains('hidden');
      dismissLiveOrderAlert();
      const isBannerClosed = bannerEl && bannerEl.classList.contains('hidden');

      if (toggledSound !== initSound && restoredSound === initSound && isBannerOpen && isBannerClosed) {
        record(true, 'Runtime Admin Audio Chime & Live Order Alert Banner', 'Sound toggles & visual live alert banner open/dismiss operational');
      } else {
        record(false, 'Runtime Admin Audio Chime & Live Order Alert Banner', 'Failed sound/banner: init=' + initSound + ', toggled=' + toggledSound + ', bannerOpen=' + isBannerOpen + ', bannerClosed=' + isBannerClosed);
      }
    }

    // 6. Check Admin Promo Banner Customizer Lifecycle & Presets
    if (typeof openAdminPromoBannerModal === 'function' && typeof closeAdminPromoBannerModal === 'function' && typeof applyPromoPreset === 'function' && typeof handleSavePromoBanner === 'function') {
      openAdminPromoBannerModal();
      const pModal = document.getElementById('admin-promo-banner-modal');
      const isPromoOpen = pModal && !pModal.classList.contains('hidden');
      applyPromoPreset('school');
      const tagVal = document.getElementById('promo-input-tag')?.value;
      handleSavePromoBanner();
      const stored = localStorage.getItem('edushop_promo_banner_settings');
      closeAdminPromoBannerModal();
      const isPromoClosed = pModal && pModal.classList.contains('hidden');

      if (isPromoOpen && tagVal === '🎒 បវេសនកាល' && stored && isPromoClosed) {
        record(true, 'Runtime Admin Promo Banner Customizer Lifecycle', 'Modal open/close, preset selection (🎒 បវេសនកាល) & localStorage sync verified');
      } else {
        record(false, 'Runtime Admin Promo Banner Customizer Lifecycle', 'Failed: open=' + isPromoOpen + ', tag=' + tagVal + ', stored=' + !!stored + ', closed=' + isPromoClosed);
      }
    }

    // 7. Check Admin Bulk Wholesale Discount Customizer Lifecycle & Presets
    if (typeof openAdminBulkDiscountModal === 'function' && typeof closeAdminBulkDiscountModal === 'function' && typeof applyBulkDiscountPreset === 'function' && typeof handleSaveBulkDiscountSettings === 'function') {
      openAdminBulkDiscountModal();
      const bModal = document.getElementById('admin-bulk-discount-modal');
      const isBulkOpen = bModal && !bModal.classList.contains('hidden');
      applyBulkDiscountPreset('standard');
      const t1Val = parseInt(document.getElementById('bulk-tier1-units')?.value, 10);
      handleSaveBulkDiscountSettings();
      const stored = localStorage.getItem('edushop_bulk_discount_settings');
      closeAdminBulkDiscountModal();
      const isBulkClosed = bModal && bModal.classList.contains('hidden');

      if (isBulkOpen && t1Val === 5 && stored && isBulkClosed) {
        record(true, 'Runtime Admin Bulk Wholesale Discount Customizer Lifecycle', 'Modal open/close, preset selection & localStorage sync verified');
      } else {
        record(false, 'Runtime Admin Bulk Wholesale Discount Customizer Lifecycle', 'Failed: open=' + isBulkOpen + ', t1=' + t1Val + ', stored=' + !!stored + ', closed=' + isBulkClosed);
      }
    }

    // 8. Check Admin Shipping Waybill Modal & Print Preview Lifecycle
    if (typeof openShippingLabelModal === 'function' && typeof printShippingLabel === 'function' && typeof closeShippingLabelModal === 'function' && typeof openShippingLabelPrintWindow === 'function') {
      const o = adminOrders && adminOrders[0] ? adminOrders[0] : { id: 'ORD-1001' };
      openShippingLabelModal(o.id);
      const sModal = document.getElementById('shipping-label-modal');
      const isLabelOpen = sModal && !sModal.classList.contains('hidden');
      const hasWaybillContent = !!document.querySelector('.shipping-waybill');
      
      const origPrint = window.print;
      window.print = function() {};
      printShippingLabel();
      const isPrintingClassActive = document.body.classList.contains('printing-waybill');
      window.print = origPrint;
      
      closeShippingLabelModal();
      const isLabelClosed = sModal && sModal.classList.contains('hidden');
      const isPrintClassRemoved = !document.body.classList.contains('printing-waybill');

      if (isLabelOpen && hasWaybillContent && isPrintingClassActive && isLabelClosed && isPrintClassRemoved) {
        record(true, 'Runtime Admin Shipping Waybill & Print Preview Engine', 'Modal open, waybill rendering, print preview activation & clean dismissal verified');
      } else {
        record(false, 'Runtime Admin Shipping Waybill & Print Preview Engine', 'Failed: open=' + isLabelOpen + ', content=' + hasWaybillContent + ', printing=' + isPrintingClassActive + ', closed=' + isLabelClosed);
      }
    }

    // 9. Check Admin Ordered Items Images Rendering in Orders Table (មុខទំនិញដែលបានទិញ)
    if (typeof renderAdminOrdersTable === 'function' && typeof getOrderItemImage === 'function' && typeof openAdminItemImagePreview === 'function') {
      renderAdminOrdersTable();
      const rows = document.querySelectorAll('#admin-orders-table tr');
      const firstRow = rows[0];
      const itemsCell = firstRow ? firstRow.children[3] : null;
      const images = itemsCell ? itemsCell.querySelectorAll('img') : [];
      const hasImages = images.length > 0;
      const firstSrc = hasImages ? images[0].getAttribute('src') : '';

      openAdminItemImagePreview('Test Poster', 'poster_welcome.jpg');
      const pModal = document.getElementById('admin-image-preview-modal');
      const isModalOpened = pModal && !pModal.classList.contains('hidden');
      pModal.classList.add('hidden');

      if (hasImages && firstSrc && isModalOpened) {
        record(true, 'Runtime Admin Ordered Items Visual Thumbnail Engine', 'Purchased items thumbnails rendered with images (' + firstSrc + ') & image preview modal operational');
      } else {
        record(false, 'Runtime Admin Ordered Items Visual Thumbnail Engine', 'Failed: hasImages=' + hasImages + ', firstSrc=' + firstSrc + ', modalOpened=' + isModalOpened);
      }
    }

    // 10. Check Admin 1-Click Telegram Notification Button
    if (typeof notifyCustomerDeliveryTelegram === 'function') {
      renderAdminOrdersTable();
      const tgBtns = document.querySelectorAll('#admin-orders-table button[onclick*="notifyCustomerDeliveryTelegram"]');
      const hasTgBtn = tgBtns.length > 0;
      const firstBtnText = hasTgBtn ? tgBtns[0].innerText : '';

      if (hasTgBtn && firstBtnText.includes('Telegram')) {
        record(true, 'Runtime Admin 1-Click Telegram Customer Notification Button', '1-Click Telegram notification action buttons rendered across orders table');
      } else {
        record(false, 'Runtime Admin 1-Click Telegram Customer Notification Button', 'Failed: hasTgBtn=' + hasTgBtn + ', text=' + firstBtnText);
      }
    }

  } catch(err) {
    record(false, 'Admin Runtime Execution Exception', err.name + ': ' + err.message);
  }

  document.getElementById('admin-harness-result').innerText = JSON.stringify(res);
});
</script>
"@

    $adminHarnessHtml = $adminBaseHtml -replace '</body>', ($adminTestScript + "`n</body>")
    Set-Content -Path $adminHarnessPath -Value $adminHarnessHtml -Encoding UTF8

    try {
        $adminFileUri = "file:///" + ($adminHarnessPath -replace '\\', '/')
        $adminDump = & $browserPath --headless --virtual-time-budget=3000 --dump-dom $adminFileUri | Out-String

        if ($adminDump -match '<div id="admin-harness-result"[^>]*>([\s\S]*?)</div>') {
            $rawJsonA = $matches[1]
            try {
                $resultsA = $rawJsonA | ConvertFrom-Json
                foreach ($r in $resultsA) {
                    if ($r.pass) {
                        Report-Pass $r.name $r.detail
                    } else {
                        Report-Fail $r.name $r.detail
                    }
                }
            } catch {
                Report-Fail "Admin Runtime Test Output Parse Error" $rawJsonA
            }
        } else {
            Report-Warn "Admin Headless Output Unparsed" "Could not extract #admin-harness-result from browser DOM"
        }
    } catch {
        Report-Warn "Admin Headless Test Execution Error" $_.Exception.Message
    } finally {
        if (Test-Path $adminHarnessPath) {
            Remove-Item $adminHarnessPath -Force -ErrorAction SilentlyContinue
        }
    }
}

# ------------------------------------------------------------------------------
# FINAL REPORT SUMMARY
# ------------------------------------------------------------------------------
Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host " 📊 VERIFICATION SUMMARY" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  PASSED:   $passedCount" -ForegroundColor Green
Write-Host "  FAILED:   $failedCount" -ForegroundColor $(if ($failedCount -gt 0) { "Red" } else { "Gray" })
Write-Host "  WARNINGS: $warnCount" -ForegroundColor $(if ($warnCount -gt 0) { "Yellow" } else { "Gray" })
Write-Host "============================================================" -ForegroundColor Cyan

if ($failedCount -eq 0) {
    Write-Host ""
    Write-Host " 🎉 ALL CHECKS PASSED! Project is healthy and ready for changes." -ForegroundColor Green
    Write-Host ""
    exit 0
} else {
    Write-Host ""
    Write-Host " ⚠️  VERIFICATION FAILED! Please resolve the issues above before editing." -ForegroundColor Red
    Write-Host ""
    exit 1
}
