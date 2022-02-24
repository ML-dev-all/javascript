let a = [2, 3, 4, 1, 6, 5];
let b = a.sort(); // sort() altera a matrix original
console.log(a);
console.log(b);

let c = [];
for (let i = 0; i < a.length; i++) {
  c[i] = a[i];
}
console.log(c);

let d = Array.from(c);
console.log(d);

console.log(Array.of(1, 2, 3, 4));
let copia = Array.from(a);
console.log(copia);
console.log(copia.length);
delete copia[1];
console.log(copia);
console.log(copia.length);

let data = [1, 2, 3, 4, 5, 6, 7],
  sum = 0;
data.forEach((value) => {
  sum += value;
});
console.log(sum);

let mata = [1, 2, 3];
let alt = mata.map((x) => x * x);
console.log(alt);
console.log(mata);
let filtro = alt.filter((x) => x <= 4);
console.log(filtro);

let reducao = alt.reduce((x, y) => (y < x ? x : y));
console.log(reducao);

let nova = [1, 2, 3];
nova.push(4, 5);
nova.pop();
nova.unshift(232);
nova.shift();
console.log(nova);

let pedaco = data.slice(1, 4);
console.log(pedaco);

let novopedaco = [1, 2, 3, 4, 5, 6, 7, 8];
let novopedaco2 = novopedaco.splice(1, 4);
console.log(novopedaco);
console.log(novopedaco2);
