var minutes = 25;
var seconds = "00";

//initialise two sounds we have before
var click = new Audio('click.mp3');
var bell = new Audio('bell.mp3');

function template() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

function start() {
    click.play();
    
    //change number in timer
    
    minutes = 24;
    seconds = 59;
    
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    //minutes timer function fires every 60 seconds
    //seconds timer function fires every second
    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

//has to be declared inside the start function

function minutesTimer() {
    //will fire every 6000 milliseconds
    //and decrease the mminnunte number 
    minutes = minutes - 1;
    document.getElementById("minutes").innerHTML = minutes;
}

function secondsTimer() {
    //will fire every 6000 milliseconds
    //and decrease the mminnunte number 
    seconds = seconds - 1;
    document.getElementById("seconds").innerHTML = seconds;
    if(seconds <= 0) {
        //whenever timer goes to zero at that point the timer has to stop 
        //so reset interval
        if(minutes <= 0 ) {
            clearInterval(minutes_interval);
            clearInterval(seconds_interval);
            
            document.getElementById("done").innerHTML = "Session completed!! Take a Break";

            document.getElementById("done").classList.add("show_message");

             bell.play();
         }
        seconds = 60;
     }
   }
}


