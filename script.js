let hours=0;
let minutes=0;
let second=0;
let millisecond=0;
let timer=null;

let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");
let lap=document.getElementById("lap");

let laps=document.getElementById("laps");

start.addEventListener("click",()=>{
    if(timer!=null){
        return;
    }

    timer=setInterval(()=>{

        millisecond++;

        if(millisecond==100){
            second++;
            millisecond=0;
        }

        if(second==60){
            minutes++;
            second=0;
        }

        if(minutes==60){
            hours++;
            minutes=0;
        }

        updateTimer();

    },10);
});

function updateTimer(){

    let h=hours<10 ? "0"+hours : hours;
    let m=minutes<10 ? "0"+minutes : minutes;
    let s=second<10 ? "0"+second : second;
    let ms=millisecond<10 ? "0"+millisecond : millisecond;

    document.getElementById("hours").innerText=h;
    document.getElementById("minutes").innerText=m;
    document.getElementById("seconds").innerText=s;
    document.getElementById("milliseconds").innerText=ms;
}

stop.addEventListener("click",()=>{

    clearInterval(timer);
    timer=null;

});

reset.addEventListener("click",()=>{

    clearInterval(timer);
    timer=null;

    hours=0;
    minutes=0;
    second=0;
    millisecond=0;

    updateTimer();
    laps.innerText="";

});

lap.addEventListener("click",()=>{

    let li=document.createElement("li");

    li.innerText=
    `${hours<10?"0"+hours:hours}:`+
    `${minutes<10?"0"+minutes:minutes}:`+
    `${second<10?"0"+second:second}:`+
    `${millisecond<10?"0"+millisecond:millisecond}`;

    laps.appendChild(li);

});
