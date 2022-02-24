/* if (expression) 
        statement
    else
        statement */

let username;
if (username == null) username = "John Doe";
console.log(username);

/* switch (expression) {
    statements
} */

/*
switch(n) {
    case 1: 
    break;
    case 2:
    break;
    default:
    break;
} */

/*
while (expression) statement
*/

/*
do statement
while (expression);
*/

/*
for (initialize; test; increment) statement
*/

/* for/of */
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  sum = 0;
for (let element of data) {
  sum += element;
}
console.log(sum);

let o = { x: 1, y: 2, z: 3 };
let chave = "";
for (let k of Object.keys(o)) {
  chave += k;
}
console.log(chave);

let ob = { x: 1, y: 2, z: 3 };
let valores = "";
for (let k of Object.values(ob)) {
  valores += k;
}
console.log(valores);

let obj = { x: 1, y: 2, z: 3 };
let entrada = "";
for (let [k, z] of Object.entries(obj)) {
  entrada += k + z;
}
console.log(entrada);

let frequency = {};
for (let letter of "missisipi") {
  if (frequency[letter]) {
    frequency[letter]++;
  } else {
    frequency[letter] = 1;
  }
}
console.log(frequency);

/*
for (variable in object) statement
*/
