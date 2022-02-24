function distance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

console.log(`Distância entre os pontos é de: ${distance(0, 0, 2, 2)}`);

const distance2 = (a1, b1, a2, b2) => {
  let da = a2 - a1;
  let db = b2 - b1;
  return Math.sqrt(da * da + db * db);
};

console.log(`Distância entre os pontos é de: ${distance2(0, 0, 2, 2)}`);

let soma = distance(0, 0, 2, 2) + distance2(0, 0, 2, 2);

console.log(`Soma entre os pontos é de: ${soma}`);

function factorial(x) {
  if (x < 0) throw new Error("número não pode ser negativo");
  let f;
  for (f = 1; x > 1; f *= x, x--);
  return f;
}

try {
  let n = 5; // Number(prompt("Entre um número positivo", ""));
  let nf = factorial(n);
  console.log(`${n}! = ` + nf);
} catch (ex) {
  console.log(ex);
}

function vectorMultiply({ x, y, z = 0, ...props }, scalar) {
  return { x: x * scalar, y: y * scalar, z: z * scalar, ...props };
}
console.log(vectorMultiply({ x: 1, y: 2, w: -1 }, 2));

const operators = {
  add: (x, y) => x + y,
  substract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  pow: Math.pow,
};

function operate(operation, operando1, operando2) {
  if (typeof operators[operation] === "function") {
    return operators[operation](operando1, operando2);
  } else throw "Operação desconhecida";
}

console.log(operate("pow", 10, 2));
console.log(operate("add", 123, 17));
console.log(operate("divide", 200, 5));
