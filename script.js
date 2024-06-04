let timerInt;
let sec;
let min;
let hour;
let day;


function timer(){
    if(sec=== 0){
        if(min=== 0){
            if(hour=== 0){
                if(day=== 0){
                    stopTimer();
                    return;
                }
                day--;
                hour= 23;
                min= 59;
                sec= 59;
               }
                else{
                    hour--;
                    min=59
                    sec=59
                }
               }else{
                min--;
                sec= 59
               }
    }
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

