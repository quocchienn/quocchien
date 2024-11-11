/*
 * Script mở khóa Meitu Pro v10.22.5 - Sửa lỗi yêu cầu đăng ký
 * Quốc Chiến ❤️‍🩹
 * Tham Gia Nhóm Telegram Để Được Hỗ Trợ: https://t.me/shadowrocketunlockproapps
 */

let obj = JSON.parse($response.body);

if (obj && obj.data) {
    // Mở khóa trạng thái VIP
    obj.data.isVip = true;
    obj.data.vipType = "Pro";
    obj.data.vipExpireTime = "2099-12-31T23:59:59Z";
    obj.data.vipLevel = 3;
    obj.data.isExpired = false;
    obj.data.autoRenew = true;

    // Cập nhật trạng thái mở khóa tất cả các tính năng
    obj.data.unlockAll = true;
    obj.data.hasPaid = true;
    obj.data.subscription = {
        "isActive": true,
        "status": "active",
        "expireDate": "2099-12-31T23:59:59Z"
    };

    // Xóa thông báo yêu cầu trả phí
    if (obj.data.payPrompt) {
        obj.data.payPrompt = null;
    }
    if (obj.data.showPayDialog) {
        obj.data.showPayDialog = false;
    }
}

// Trả về kết quả đã chỉnh sửa
$done({ body: JSON.stringify(obj) });