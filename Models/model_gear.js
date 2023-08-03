var GearUnit = function(floor, amount, startingRatio, startingHyper) {
    this.floor = floor;
    this.amount = amount;
    this.startingRatio = startingRatio;
    this.ratio = startingRatio;
    this.startingHyper = startingHyper;
    this.hyper = startingHyper;
    this.capacity = 100;
    this.isTooBig = false;
}

GearUnit.prototype.Recalculate = function(prevCapacity) {

    let newCapacity = (prevCapacity * this.ratio) ** this.hyper;

    if (prevCapacity == -1 || newCapacity >= 1e15 || !isFinite(newCapacity)) {

        this.capacity = Infinity;
        this.isTooBig = true;
        return -1;
    }

    this.capacity = newCapacity;
    return newCapacity;
}

GearUnit.prototype.Add = function(amount) {
    this.amount += amount;

    if (this.amount >= this.capacity && !this.isTooBig) {
        this.amount -= this.capacity;
        return true
    }
    return false;
}

GearUnit.prototype.GetPercentageString = function() {
    if (this.isTooBig) {
        return (0).toFixed(4);
    }
    return (this.amount / this.capacity * 100).toFixed(4).padStart(7, "0");
}