
let sec= 0;

function timserSec() { 
sec+= 1;
return sec;
}

cdocument.getElementById("timerTest").innerText= sec


let timer= setInterval(timserSec,1000);

