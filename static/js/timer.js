function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        //cookie.set('deadline', t.total);
        localStorage.setItem('deadline', t.total);

        if (t.total <= 0) {
            clearInterval(timeinterval);
            alert("time up");
            window.location.href = "index.html";
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

//var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
//if(cookie.get('deadline')) {
if(localStorage.getItem('deadline')) {
    //var rem = cookie.get('deadline') / 60000;
    var rem = localStorage.getItem('deadline') / 60000;
    var deadline = new Date(Date.parse(new Date()) + rem * 60 * 1000);
}else{
    var deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000);
}
initializeClock('clockdiv', deadline);