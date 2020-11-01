console.log("File is loaded");




function updateClock(){
    let clock=document.getElementById('clock');
    let currentDate=new Date();
    let currentHrs=currentDate.getHours();
    let currentMin=currentDate.getMinutes();
    let currentSec=currentDate.getSeconds();
    let timeOfDay=(currentHrs<12)?"AM":"PM";

    currentHrs=(currentHrs>12)?currentHrs-12:currentHrs;
    currentMin=(currentMin<10)?"0"+currentMin:currentMin;
    currentSec=(currentSec<10)?"0"+currentSec:currentSec;

    let currentTimeStr=currentHrs+":"+currentMin+":"+currentSec+" "+timeOfDay;
    clock.innerHTML=currentTimeStr;
}