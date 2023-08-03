var currentTime = new Date()
var deltaTime = 0

function gameTick() {
    newTime = new Date();
    deltaTime = newTime - currentTime;
    currentTime = newTime;
    pubsub.emit('Tick', deltaTime);
}

//$('#pageGear').load('Modules/Gear/page_gear.html');
$('#pageGear').load('testLoad.html');

setInterval(gameTick, 50);