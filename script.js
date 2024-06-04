let timerInt;
let sec= 0;
let min= 0;
let hour= 0;
let day= 0;


function timer() { 

if (sec === 59){
    sec= 0;

    if (min === 59){
        min= 0;

        if (hour=== 23){
           hour= 0;
           day++; 
           document.getElementById("timerDay").innerText= day;
        }

    else{
    hour++;
    }
    document.getElementById("timerHour").innerText= hour;
    }
    else{
    min++;
    }
    document.getElementById("timerMin").innerText= min;
    }

    else{
    sec++;
    }

document.getElementById("timerSec").innerText= sec;
}


function startTimer(){
    if (!timerInt){
    timerInt= setInterval(timer,1000);
}
}

function stopTimer(){
    clearInterval(timerInt);
    timerInt= null;

}

function resetTimer(){
    sec= 0;
    min= 0;
    hour= 0;
    day= 0;
    document.getElementById("timerSec").innerText= sec;
    document.getElementById("timerMin").innerText= min;
    document.getElementById("timerHour").innerText= hour;
    document.getElementById("timerDay").innerText= day;
}

