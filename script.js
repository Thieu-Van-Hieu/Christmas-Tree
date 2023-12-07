$(document).ready(function () {
    let currentIndex = 0;
    let isAnimating = false;
    let intervalId;

    const speedPresets = [
        { speed_light: 100, speed_loop: 100 },
        { speed_light: 200, speed_loop: 200 },
        { speed_light: 100, speed_loop: 400 },
        { speed_light: 200, speed_loop: 400 },
        { speed_light: 500, speed_loop: 2000 }
        
    ];

    let { speed_light, speed_loop } = speedPresets[currentIndex];

    function toggleBaubleLights() {
        $('.bauble').each(function (index) {
            const bauble = $(this);
            setTimeout(function () {
                bauble.toggleClass('light');
            }, index * speed_light); // Sử dụng speed_light cho thời gian
        });
    }

    function startAnimation() {
        // Ngừng animation hiện tại trước khi bắt đầu animation mới
        stopAnimation();

        // Gọi hàm toggleBaubleLights để bắt đầu hiệu ứng
        toggleBaubleLights();

        // Gọi hàm toggleBaubleLights mỗi speed_loop ms
        return setInterval(toggleBaubleLights, speed_loop);
    }

    function stopAnimation() {
        $('.bauble').removeClass('light');
        clearInterval(intervalId);
    }

    // Thêm chức năng cho button
    $('#changeSpeedButton').click(function () {
        if (!isAnimating) {
            isAnimating = true;

            currentIndex = (currentIndex + 1) % speedPresets.length;

            // Lấy giá trị mới của speed_light và speed_loop từ mảng
            ({ speed_light, speed_loop } = speedPresets[currentIndex]);

            // Dừng animation hiện tại
            stopAnimation();

            // Bắt đầu animation mới
            intervalId = startAnimation();

            // Thiết lập thời gian chờ trước khi cho phép click lại
            setTimeout(function () {
                isAnimating = false;
            }, speed_loop * 5); // Chờ đến khi animation kết thúc
        }
    });

    // Bắt đầu animation mặc định
    intervalId = startAnimation();
});
