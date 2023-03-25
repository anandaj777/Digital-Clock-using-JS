function showTime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    
    var session = "AM";

    if(h>=12) {
        session = "PM";
    }

if(h > 12) {
    h = h - 12;
}


    h = h < 10 ? "0"+h : h;
    m = m < 10 ? "0"+m : m;
    s = s < 10 ? "0"+s : s;
       // s = h<12 ? s+" AM" : s+" PM";(for 24 hour clock)

    var time = h + " : " + m + " : " + s +" "+ session;
 document.getElementsByTagName('h1')[0].innerText = time;
 setTimeout(showTime,1000);
}