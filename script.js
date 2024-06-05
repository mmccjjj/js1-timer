
let timerInt;
let sec;
let min;
let hour;
let day;
let alarmSound= new Audio("/sounds/alarm-clock-70648.mp3");




function timer(){
    if(sec== 0){
        if(min== 0){
            if(hour== 0){
                if(day== 0){
                    stopTimer();
                    alarmSound.play();
                    alert("Timer ist fertig");
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
              }else{
                sec--;
              }
    
    
    hour= hour.toString().padStart(2,"0")
    min= min.toString().padStart(2,"0")
    sec= sec.toString().padStart(2,"0")
       
    document.getElementById("timerDay").innerText= day
    document.getElementById("timerHour").innerText= hour
    document.getElementById("timerMin").innerText= min
    document.getElementById("timerSec").innerText= sec
}



function startTimer(){
    if (!timerInt){
        if (day== 0&& hour== 0&& min== 0&& sec== 0) {

        day = document.getElementById("inDay").value || 0;
        hour = document.getElementById("inHour").value || 0;
        min = document.getElementById("inMin").value || 0;
        sec = document.getElementById("inSec").value || 0;
        }
        timerInt= setInterval(timer,10);
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

    hour= hour.toString().padStart(2,"0");
    min= min.toString().padStart(2,"0");
    sec= sec.toString().padStart(2,"0");

    document.getElementById("timerSec").innerText= sec;
    document.getElementById("timerMin").innerText= min;
    document.getElementById("timerHour").innerText= hour;
    document.getElementById("timerDay").innerText= day;
    document.getElementById("inSec").value= null;
    document.getElementById("inMin").value= null;
    document.getElementById("inHour").value= null;
    document.getElementById("inDay").value= null;
}

