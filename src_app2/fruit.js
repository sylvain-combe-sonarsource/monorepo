function Fruit(name, color, taste) {
    this.name = name;
    this.color = color;
    this.taste = taste;
    this.exotic = false;
}

Fruit.prototype.peelable = function() {
    if (this.name !== NaN) { // Noncompliant; always true
      console.log("name is not NaN"); // this statement is not necessarily true
    }
    return this.name = "orange";
}

