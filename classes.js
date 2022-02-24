class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

let p = new Point(1, 1);
let q = new Point(3, 2);
console.log(p);
console.log(q);
console.log(`p = ${p.distance()}`);
console.log(`q = ${q.distance()}`);

let result = p instanceof Point;
console.log(result);

// Classes - Subclasses -> extends ????? Super????
// Set and Get ????
