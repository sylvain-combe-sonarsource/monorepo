function Fruit(name, color, taste) {
    this.name = name;
    this.color = color;
    this.taste = taste;
    this.exotic = false;
}

Fruit.prototype.peelable = function() {
    return this.name = "orange";
}

