var currentTime = new Date()
var deltaTime = 0

function gameTick() {
    newTime = new Date();
    deltaTime = newTime - currentTime;
    currentTime = newTime;
    pubsub.emit('Tick', deltaTime);
}

//$('#pageGear').load('Modules/Gear/page_gear.html');
// Test Load method #1
$('#testLoadPageNumber1').load('/Modules/Gear/page_gear.html');

// Test Load method #2
let xhttp;
let element = document.getElementById('testLoadPageNumber2');
let file = 'testLoad2.html';

if (file) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.readyState == 200) {element.innerHTML = this.responseText;}
            if (this.readyState == 404) {element.innerHTML = "<h1>Page not found</h1>";}
        }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
}

// Test Load method #3
const targetEl = document.querySelector('#testLoadPageNumber3');
const loadSnippet = number => {
    fetch(`./testLoad3.html`)
        .then(res => {
            if(res.ok) {
                return res.text();
            }
        })
        .then(htmlSnippet => {
            targetEl.innerHTML = htmlSnippet;
        });
};

loadSnippet(1);

setInterval(gameTick, 50);