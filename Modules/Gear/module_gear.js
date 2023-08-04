var moduleGear = (function(){
    
    // Init Gear
    let gears = [
        new GearUnit(1, 0, 100, 1),
        new GearUnit(2, 0, 2, 1),
        new GearUnit(3, 0, 3, 1),
        new GearUnit(4, 0, 5, 1.5),
        new GearUnit(5, 0, 8, 2)
    ];

    // Find Elements
    let elements = [
        $('#Gear1'),
        $('#Gear2'),
        $('#Gear3'),
        $('#Gear4'),
        $('#Gear5')
    ];
    
    let c = 1;

    function Recalculate() {
        c = 1;
        for(let item of gears) {
            c = item.Recalculate(c);
        }
    }

    Recalculate();

    function FindElements() {
        elements = [
            $('#Gear1'),
            $('#Gear2'),
            $('#Gear3'),
            $('#Gear4'),
            $('#Gear5')
        ];
    }

    function Tick(deltaTime) {
        
        for(let item of gears) {
            item.Add(deltaTime/1000);
        }

        for(i = 0; i < gears.length; i++) {
            elements[i].text("Floor " + gears[i].floor + ": " + gears[i].GetPercentageString() + "%(" + gears[i].amount.toFixed(4) + "/" + gears[i].capacity + ")");
        }

    }

    pubsub.on('Tick', Tick)

    return {
        Recalculate: Recalculate,
        FindElements: FindElements
    }

})()