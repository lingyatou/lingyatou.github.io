var now = new Date();
function createtime() {
    now.setTime(now.getTime() + 1000);

    // 第一个功能：从2025年5月9日20:46开始计算运行时间
    var siteLaunchDate = new Date("05/09/2025 20:46:00");
    var timeRunning = (now - siteLaunchDate) / 1000;
    var daysRunning = Math.floor(timeRunning / 86400);
    var hoursRunning = Math.floor((timeRunning % 86400) / 3600);
    var minutesRunning = Math.floor((timeRunning % 3600) / 60);
    var secondsRunning = Math.floor(timeRunning % 60);

    // 第二个功能：计算距离7月11日还有多久
    var targetDate = new Date("07/11/2025 00:00:00");
    var timeRemaining = (targetDate - now) / 1000;
    var daysRemaining = Math.floor(timeRemaining / 86400);
    var hoursRemaining = Math.floor((timeRemaining % 86400) / 3600);
    var minutesRemaining = Math.floor((timeRemaining % 3600) / 60);
    var secondsRemaining = Math.floor(timeRemaining % 60);

    // 第三个功能：白天/黑夜显示
    var currentHour = now.getHours();
    var dayNightText = (currentHour >= 6 && currentHour < 18) ?
        "此时已是白昼 ☀️" : "此时已是黑夜 🌙";

    // 格式化所有时间显示，补零
    hoursRunning = String(hoursRunning).padStart(2, '0');
    minutesRunning = String(minutesRunning).padStart(2, '0');
    secondsRunning = String(secondsRunning).padStart(2, '0');
    hoursRemaining = String(hoursRemaining).padStart(2, '0');
    minutesRemaining = String(minutesRemaining).padStart(2, '0');
    secondsRemaining = String(secondsRemaining).padStart(2, '0');

    // 组合显示文本
    var displayText = `
        <div style="font-size:13px;font-weight:bold">
            <span style="color: #4CAF50;">⏱️ 本站运行时间: ${daysRunning}天 ${hoursRunning}时 ${minutesRunning}分 ${secondsRunning}秒</span><br>
            <span style="color: #2196F3;">⏳ 距离帕朵菲莉丝生日还有: ${daysRemaining}天 ${hoursRemaining}时 ${minutesRemaining}分 ${secondsRemaining}秒</span><br>
            <span style="color: ${currentHour >= 6 && currentHour < 18 ? '#FF9800' : '#673AB7'};">${dayNightText}</span>
        </div>
    `;

    // 更新到页面
    if (document.getElementById("workboard")) {
        document.getElementById("workboard").innerHTML = displayText;
    }
}

// 每秒更新一次
setInterval(createtime, 1000);