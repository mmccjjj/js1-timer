
let timerInt;
let sec;
let min;
let hour;
let day;
let schiebeSec= document.getElementById("schiebeSec");
let schiebeMin= document.getElementById("schiebeMin");
let schiebeHour= document.getElementById("schiebeHour");
let schiebeDay= document.getElementById("schiebeDay");
let disSec= document.getElementById("timerSec");
let disMin= document.getElementById("timerMin");
let disHour= document.getElementById("timerHour");
let disDay= document.getElementById("timerDay");
let alarmSound= new Audio("/sounds/alarm-clock-70648.mp3");
let clickSound= new Audio("/sounds/click.mp3");





function syncSec(){
    let wertSec = document.getElementById("schiebeSec").value.padStart(2, "0");
    disSec.innerText= wertSec;
    sec= parseInt(wertSec, 10);


}

function syncMin() {
    let wertMin = document.getElementById("schiebeMin").value.padStart(2, "0");
    disMin.innerText = wertMin;
    min = parseInt(wertMin, 10);
}

function syncHour() {
    let wertHour = document.getElementById("schiebeHour").value.padStart(2, "0");
    disHour.innerText = wertHour;
    hour = parseInt(wertHour, 10);
}

function syncDay() {
    let wertDay = document.getElementById("schiebeDay").value.padStart(2, "0");
    disDay.innerText = wertDay;
    day = parseInt(wertDay, 10);
}



function timer(){
    clickSound.currentTime= 0;
    clickSound.play()
    if(sec== 0){
        if(min== 0){
            if(hour== 0){
                if(day== 0){
                    clickSound.pause();
                    stopTimer();
                    schiebeSec.value= 0;
                    schiebeMin.value= 0;
                    schiebeHour.value= 0;
                    schiebeHour.value= 0;
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
              clickSound.play()
              disDay.innerText= day.toString().padStart(2,"0");
              disHour.innerText= hour.toString().padStart(2,"0");
              disMin.innerText= min.toString().padStart(2,"0");
              disSec.innerText = sec.toString().padStart(2, "0");
            }


function startTimer(){
    if (!(day== 0&& hour== 0&& min== 0&& sec== 0)){

    if (!timerInt){
        timerInt= setInterval(timer,1000);
        }
    
    document.getElementById("schiebeSec").disabled= true;
    document.getElementById("schiebeMin").disabled= true;
    document.getElementById("schiebeHour").disabled= true;
    document.getElementById("schiebeDay").disabled= true;
    }else{
        alert("Kein Zeit eingegeben")
    }
}

function stopTimer(){
    clickSound.pause();
    clearInterval(timerInt);
    timerInt= null;
    document.getElementById("schiebeSec").disabled= false;
    document.getElementById("schiebeMin").disabled= false;
    document.getElementById("schiebeHour").disabled= false;
    document.getElementById("schiebeDay").disabled= false;


}

function resetTimer(){
    sec= 0;
    min= 0;
    hour= 0;
    day= 0;

    day= day.toString().padStart(2,"0");
    hour= hour.toString().padStart(2,"0");
    min= min.toString().padStart(2,"0");
    sec= sec.toString().padStart(2,"0");
    

    disSec.innerText= sec;
    disMin.innerText= min;
    disHour.innerText= hour;
    disDay.innerText= day;
    schiebeSec.value= 0;
    schiebeMin.value= 0;
    schiebeHour.value= 0;
    schiebeDay.value= 0;
}




document.addEventListener("DOMContentLoaded", resetTimer);
