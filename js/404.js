/*
 * Van_Nya's 404 jumping script
 */

const HOME = new URL(window.location.href).origin
const TIMEOUT = 1000, DELAY = 5;
document.getElementById('page-site-info').innerHTML +=
`<div id="site-subtitle"><span id="timeout">${String(DELAY)}</span>秒后自动跳转回主页</div>`;

(function timer() {
    let _delay = DELAY;
    setInterval(function jumper() {
        if (_delay === 0) {
            window.location.href = String(HOME);
        } else {
            _delay--;
            document.getElementById('timeout').innerHTML = String(_delay);
        }
    }, TIMEOUT)
})()
