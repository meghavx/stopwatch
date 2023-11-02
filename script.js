// Important variables
let hr = min = sec = ms = 0;
let timer = false;
let stopwatch = document.getElementById("stopwatch");

// OnClick functions
function start() {
    timer = true;
    startStopwatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    hr = min = sec = ms = 0;
    stopwatch.innerHTML = `00:00:00.00`;
}

function startStopwatch() {
    if (timer && ++ms) {
        if (ms == 100 && ++sec)  ms = 0;
        if (sec == 60 && ++min) sec = 0;
        if (min == 60 && ++hr)  min = 0;

        stopwatch.innerHTML = `${pad(hr)}:${pad(min)}:${pad(sec)}.${pad(ms)}`;
        
        setTimeout("startStopwatch()", 10);
    }
}

// Utility function
function pad(unit) {
    return `${unit < 10 ? "0" : ""}${unit}`;
}

