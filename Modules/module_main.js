var moduleMain = (function() {

    var currentTime = new Date()
    var deltaTime = 0

    function gameTick() {
        newTime = new Date();
        deltaTime = newTime - currentTime;
        currentTime = newTime;
        pubsub.emit('Tick', deltaTime);
    }

    setInterval(gameTick, 50);

})();

$('#mainPanel').load('Modules/Gear/page_gear.html');