// Constants
const SRC = window.location.href;
const TARGET = SRC.substring(0, SRC.indexOf('/', SRC.indexOf(':') + 3));
const TIMEOUT = 1000;
const DELAY = 5;

// Initialization
document.getElementById("page-site-info").innerHTML =
'<h1 id="site-title">糟糕 页面不见了</h1>' +
'<div id="site-subtitle">' +
    '<bdo id="timeout" dir="auto">' +
        String(DELAY) +
    '</bdo>' + '秒后自动跳转回主页' +
'</div>';

// Set delay to countdown
function setDelay(delay) {
    document.getElementById('timeout').innerHTML = String(delay);
}

// Jump to target
function jumpTo(target) {
    location.href = String(target);
    window.location.href = String(target);
}

// Main
(function () {
    let _delay = DELAY;
    setInterval(function () {
        if (_delay === 0) {
            jumpTo(TARGET);
        } else {
            _delay--;
            setDelay(_delay)
        }
    }, TIMEOUT)
})()
