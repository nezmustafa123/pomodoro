var minutes = 25;
var seconds = 0;
var myInterval = 0;
//initialise two sounds we have before
var click = new Audio('click.mp3');
var bell = new Audio('bell.mp3');

var minuteInput = document.querySelector('.input-minutes');
var secondsInput = document.querySelector('.input-seconds');
var pause = document.querySelector('.btn_pause');


function formatSeconds(sec) {
    if(sec === 0 ) {
        return "00"
        
    }
    return sec
}

function template() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = formatSeconds(seconds);

}

//gloval variables
// minutes = 24;
// seconds = 59;

function start() {
  minutes = minuteInput.value;
  seconds = secondsInput.value;
    click.play();
    
    document.querySelector('.input-minutes').value = '';
    document.querySelector('.input-seconds').value = '';
    //change number in timer
    
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = formatSeconds(seconds);
    
    //minutes timer function fires every 60 seconds
    //seconds timer function fires every second
//    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

//has to be declared inside the start function
      pause.addEventListener('click', function(e) {
       e.preventDefault();
//        clearInterval(minutes_interval);
        clearInterval(seconds_interval);
    });



};
function minutesTimer() {
    //will fire every 6000 milliseconds
    //and decrease the minunte number 
    minutes = minutes - 1;
    document.getElementById("minutes").innerHTML = minutes;
}

function secondsTimer() {
    //will fire every 6000 milliseconds
    //and decrease the minute number 
    seconds = seconds - 1;
  
    if(seconds === -1) {
        
       minutesTimer();
        //whenever timer goes to zero at that point the timer has to stop 
        //so reset interval
        if(minutes === 0 ) {
//            clearInterval(minutes_interval);
            clearInterval(seconds_interval);
            
            document.getElementById("done").innerHTML = "Session completed!! Take a Break";

            document.getElementById("done").classList.add("show_message");

             bell.play();
         }
        seconds = 59;
     }
    document.getElementById("seconds").innerHTML = formatSeconds(seconds);
   }

    
//    pause.addEventListener('click', function(e) {
//       e.preventDefault();
////        clearInterval(minutes_interval);
//        clearInterval(seconds_interval);
//    });
//


