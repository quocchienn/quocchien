// Script unlock tất cả các hiệu ứng Pro cho Meitu phiên bản 10.22.5
// Cấu hình để chạy với Shadowrocket hoặc ứng dụng proxy tương tự

const url = $request.url;

// Kiểm tra các endpoint yêu cầu kiểm tra trạng thái Pro
if (url.includes("/subscription/status") || url.includes("/pro/effects")) {
    let response = JSON.parse($response.body);

    // Thiết lập trạng thái Pro là true để mở khóa
    response.data = {
        "is_pro": true,
        "subscription": {
            "status": "active",
            "expiry_date": "2099-12-31T23:59:59Z",
            "is_trial": false
        },
        "features": {
            "all_effects": true,
            "unlocked_effects": ["all"]
        }
    };

    // Trả về body đã chỉnh sửa
    $done({ body: JSON.stringify(response) });
} else {
    $done({});
}