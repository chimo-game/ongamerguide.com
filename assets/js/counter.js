// Random Countdown Timer Script, by http://ctrtard.com
var timer;

function startCount() {
    timer = setInterval(count, 10000); // 200 = 200ms delay between counter changes. Lower num = faster, Bigger = slower.
}

function count() {
    var rand_no = Math.floor(4 * Math.random()); // 9 = random decrement amount. Counter will decrease anywhere from 1 - 9.
    var el = document.getElementById('counter');
    var currentNumber = parseFloat(el.innerHTML);
    var newNumber = currentNumber + rand_no;
    if (newNumber > 0) {
        el.innerHTML = newNumber;
    } else {
        el.innerHTML = "Bingo"; // This message is displayed when the counter reaches zero.
    }
}