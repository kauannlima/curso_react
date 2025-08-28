// 1 - var, let e const
console.log("%c\n*VARIAVEIS COM LET E CONST*", "color: red;");
console.log("\nUsando VAR");
var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}

console.log(x);

console.log("\nUsando LET e CONST");
let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(a);
}

console.log(a);

let i = 100;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

function logName() {
  const name = "Matheus";
  console.log(name);
}

const name = "Pedro";

logName();

console.log(name);

// 2 - arrow function
console.log("%c\n*ARROW FUNCTION*", "color: red;");
const sum = function sum(a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log("Função convencional");
console.log(sum(5, 5));

console.log("Arrow Function");
console.log(arrowSum(5, 5));

const greetin = (name) => {
  if (name) {
    return "Olá " + name + "!";
  } else {
    return "Olá";
  }
};

console.log(greetin("Matheus"));
console.log(greetin());

const testeArrow = () => console.log("Testando");

testeArrow();

console.log("\nExplicando a questão do this...");

const user = {
  name: "Kauan",
  sayUsername() {
    var self = this;
    setTimeout(function () {
      console.log(self);
      console.log("Username: " + self.name);
    }, 500);
  },
  sayUsernameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log("Username: " + this.name);
    }, 700);
  },
};

// console.log("Função convencional");
// user.sayUsername()

// console.log("Arrow Function");
// user.sayUsernameArrow()

// 3 - método filter
console.log("%c\n*MÉTODO FILTER*", "color: red;");

const arr = [1, 2, 3, 4, 5];

console.log(
  "%cUsando o filter para retornar apenas os números maiores que 3 dentro um array origem",
  "color: pink"
);
const highNumber = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(highNumber);

console;

const users = [
  { name: "Kauan", avaliable: false },
  { name: "Gabriel", avaliable: false },
  { name: "Dener", avaliable: true },
  { name: "Gaby", avaliable: true },
  { name: "Adry", avaliable: false },
  { name: "Luis", avaliable: false },
];

console.log(
  "%c\nUsando o filter para retornar apenas os users disponiveis dentro um array origem",
  "color: pink"
);
const avaliableUsers = users.filter((user) => user.avaliable);
console.log(avaliableUsers);

console.log(
  "%cUsando o filter para retornar apenas os users indisponiveis dentro um array origem",
  "color: pink"
);
const notAvaliableUsers = users.filter((user) => !user.avaliable);
console.log(notAvaliableUsers);

// 4 - método map
console.log("%c\n*MÉTODO MAP*", "color: red;");

const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira Elétrica", price: 49.99, category: "Eletro" },
  { name: "Fogão ", price: 400, category: "Eletro" },
  { name: "Calça Jeans", price: 50.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(
  "%cUsando o map para informar que certos produtos serão inseridos no catalogo de promoção dentro um array origem",
  "color: pink"
);

console.log(products);

// 5 - templates literals
console.log("%c\n*TEMPLATES LITERALS*", "color: red;");

const userName = "Kauan";
const age = 22;

console.log(
  "%cUsando o templates literals para concatenar duas variáveis",
  "color: pink"
);
console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`);

// 6 - destructuring
console.log("%c\n*DESTRUCTURING*", "color: red;");
const fruits = ["Maça", "Laranja", "Mamão"];
const [f1, f2, f3] = fruits;

console.log(fruits);
console.log("%cApós usar o destructuring...", "color: pink");
console.log(f1);
console.log(f2);
console.log(f3);

console.log("\n");

const productDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Periféricos",
  color: "Cinza",
};

const {
  name: productName,
  price,
  category: productCategory,
  color,
} = productDetails;

console.log(productDetails);
console.log("%cApós usar o destructuring...", "color: pink");
console.log(
  `O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`
);

// 7 - spread operator
console.log("%c\n*SPREAD OPERATOR*", "color: red;");

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

console.log(a1);
console.log(a2);

console.log("%cApós fazer o spread operator...", "color: pink");
const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a1, 4];

console.log(a4);

// 8 - classes
console.log("%c\n*CLASSES*", "color: red;");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

console.log("%cDois exemplos de classes 'new Product'", "color: pink");

const shirt = new Product("Camisa gola V", 20);

console.log(shirt.name);

console.log(shirt.productWithDiscount(10));

console.log(shirt.productWithDiscount(50));

console.log("\n");

const tenis = new Product("Tenis Verde", 300);

console.log(tenis.name);

console.log(tenis.productWithDiscount(10));

console.log(tenis.productWithDiscount(50));

// 9 - herança
console.log("%c\n*HERANÇA*", "color: red;");

console.log("%cHerdamos a classe da última sessão", "color: pink");
class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColor() {
    console.log("As cores são:");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["Preto", "Azul", "Verde"]);

console.log(hat.name);

console.log(hat.productWithDiscount(30));

hat.showColor();
