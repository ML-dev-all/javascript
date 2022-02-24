let o = { x: 1 };
console.log(o);
o.x = 2;
console.log(o);
o.y = 3;
console.log(o);

let p = o;
console.log(p);
p[0] = 35;
console.log(p);

let rectangle = {
  upperLeft: { x: 2, y: 2 },
  lowerRight: { x: 4, y: 5 },
};

console.log(rectangle.upperLeft.x);
console.log(rectangle.upperLeft["x"]);

let check = "x" in rectangle.upperLeft;
console.log(check);

let unitCircle = { r: 1 };
let c = Object.create(unitCircle);
c.x = 1;
c.y = 1;
c.r = 2;
console.log(unitCircle);
console.log(c);

console.log(c.hasOwnProperty("x"));

delete c.r;
console.log(c);

let target = { x: 1 },
  source = { y: 2, z: 3 };
for (let chave of Object.keys(source)) {
  target[chave] = source[chave];
}
console.log(target);

let obj1 = { x: 1 };
let obj2 = { x: 4, y: 5, z: 6 };
let obj3 = Object.assign(obj1, obj2);
console.log(obj3);

let obj4 = { ...obj1, ...obj2 };
console.log(obj4);

let square = {
  area: function () {
    return this.side * this.side;
  },
  side: 10,
};
console.log(square.area());
