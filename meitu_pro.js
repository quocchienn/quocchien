/*
 * Mở khóa Meitu Pro v10.22.5 - Bypass yêu cầu đăng ký VIP
 * Quốc Chiến ❤️‍🩹
 * Tham Gia Nhóm Telegram Để Được Hỗ Trợ: https://t.me/shadowrocketunlockproapps
 */

let obj = JSON.parse($response.body);

if (obj && obj.data) {
    // Thiết lập trạng thái VIP
    obj.data.isVip = true;
    obj.data.vipExpireTime = "2099-12-31T23:59:59Z";
    obj.data.vipLevel = 3;
    obj.data.isExpired = false;
    obj.data.autoRenewStatus = 1;
    obj.data.vipType = "Pro";
    
    // Mở khóa toàn bộ tính năng
    obj.data.hasPaid = true;
    obj.data.subscription = {
        "isActive": true,
        "expireDate": "2099-12-31T23:59:59Z"
    };

    // Vô hiệu hóa thông báo yêu cầu đăng ký
    if (obj.data.showPayDialog) {
        obj.data.showPayDialog = false;
    }
    if (obj.data.payPrompt) {
        obj.data.payPrompt = null;
    }
}

// Trả về kết quả đã chỉnh sửa
$done({ body: JSON.stringify(obj) });