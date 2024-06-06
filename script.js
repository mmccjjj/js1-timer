
let timerInt;
let sec;
let min;
let hour;
let day;
let alarmSound= new Audio("/sounds/alarm-clock-70648.mp3");
let clickSound= new Audio("/sounds/click.mp3")




function syncSec(){
   let wert= document.getElementById("schiebeSec").value;
   wert= wert.padStart(2,"0");
   sec= parseInt(wert, 10);
   document.getElementById("timerSec").innerText= wert;


}

function syncMin(){
    let wert= document.getElementById("schiebeMin").value;
    wert= wert.padStart(2,"0");
    document.getElementById("timerMin").innerText= wert;
    min= parseInt(wert);

}

function syncHour(){
    let wert= document.getElementById("schiebeHour").value;
    wert= wert.padStart(2,"0");
    document.getElementById("timerHour").innerText= wert;
    hour= parseInt(wert);

}

function syncDay(){
    let wert= document.getElementById("schiebeDay").value;
    wert= wert.padStart(2,"0");
    document.getElementById("timerDay").innerText= wert;
    day= parseInt(wert);

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
              document.getElementById("timerDay").innerText= day.toString().padStart(2,"0");
              document.getElementById("timerHour").innerText= hour.toString().padStart(2,"0");
              document.getElementById("timerMin").innerText= min.toString().padStart(2,"0");
              document.getElementById("timerSec").innerText= sec.toString().padStart(2,"0");
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

    day= day.toString().padStart(2,"0");
    hour= hour.toString().padStart(2,"0");
    min= min.toString().padStart(2,"0");
    sec= sec.toString().padStart(2,"0");
    

    document.getElementById("timerSec").innerText= sec;
    document.getElementById("timerMin").innerText= min;
    document.getElementById("timerHour").innerText= hour;
    document.getElementById("timerDay").innerText= day;
    document.getElementById("schiebeSec").value= 0;
    document.getElementById("schiebeMin").value= 0;
    document.getElementById("schiebeHour").value= 0;
    document.getElementById("schiebeDay").value= 0;
}




document.addEventListener("DOMContentLoaded", resetTimer);
