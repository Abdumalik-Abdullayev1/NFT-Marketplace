function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if(h == 0) {
        h = 23;
    }
    if(h > 23) {
        h = h - 23;
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + " : " + m + " : " + s;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();

function btn(){
    let element = document.querySelector(".nav_lists");
    element.classList.toggle("toggle");
    
}