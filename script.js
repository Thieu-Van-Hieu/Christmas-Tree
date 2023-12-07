$(document).ready(function () {
    let currentIndex = 0;

    const speedPresets = [
        { speed_light: 200, speed_loop: 200 },
        { speed_light: 100, speed_loop: 400 },
        { speed_light: 200, speed_loop: 400 },
        { speed_light: 500, speed_loop: 2000 },
        { speed_light: 100, speed_loop: 100 }
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

    // Gọi hàm toggleBaubleLights để bắt đầu hiệu ứng
    toggleBaubleLights();

    // Gọi hàm toggleBaubleLights mỗi 400ms
    const intervalId = setInterval(toggleBaubleLights, speed_loop);

    // Thêm chức năng cho button
    $('#changeSpeedButton').click(function () {
        currentIndex = (currentIndex + 1) % speedPresets.length;

        // Lấy giá trị mới của speed_light và speed_loop từ mảng
        ({ speed_light, speed_loop } = speedPresets[currentIndex]);

        // Dừng interval hiện tại
        clearInterval(intervalId);

        // Gọi lại hàm toggleBaubleLights với giá trị mới
        toggleBaubleLights();

        // Thiết lập lại interval với giá trị mới của speed_loop
        intervalId = setInterval(toggleBaubleLights, speed_loop);
    });
});
