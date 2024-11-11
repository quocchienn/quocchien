/*
 * Script mở khóa Meitu Pro v10.22.5
 * Bản quyền thuộc về Quốc Chiến ❤️‍🩹
 * Tham Gia Nhóm Telegram Để Được Hỗ Trợ: https://t.me/shadowrocketunlockproapps
 * Kênh Youtube: https://youtube.com/@quocchienn?si=2ygxKjhB_B1t6mRI
 */

let response = JSON.parse($response.body);

if (response && response.data) {
    // Mở khóa trạng thái VIP
    response.data.isVip = true;
    response.data.vipType = "Pro";
    response.data.vipExpireTime = "2099-12-31T23:59:59Z";
    response.data.vipLevel = 3;
    response.data.isExpired = false;
    response.data.autoRenew = true;

    // Loại bỏ quảng cáo
    if (response.data.ads) {
        response.data.ads = [];
    }
    if (response.data.adInfo) {
        response.data.adInfo = {};
    }

    // Thêm thông tin trạng thái VIP
    response.data.vipStatus = {
        "isVip": true,
        "vipType": "Pro",
        "vipExpire": "2099-12-31",
        "isExpired": false,
        "autoRenew": true
    };
}

// Trả về kết quả đã chỉnh sửa
$done({ body: JSON.stringify(response) });