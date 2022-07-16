/* O que são métodos? */

// const car = {
//   model: 'Fusca',
//   color: 'Branco',
//   turnOn: function () {
//     console.log('Ligou!');
//   },
// };

// car.turnOn();

/* Como gerar objetos com métodos? */

// function genCar(model, color) {
//   return {
//     model,
//     color,
//     turnOn: function () {
//       console.log('Ligou!');
//     },
//   };
// }

// const car = genCar('Fusca', 'Branco')
// car.turnOn();

/* Propriedade this */

// function genCar(model, color) {
//   return {
//     model,
//     color,
//     turnOn: function () {
//       console.log(this);
//     },
//   };
// }

// function genCar(model, color) {
//   return {
//     model,
//     color,
//     turnOn: () => {
//       console.log(this);
//     },
//   };
// }

// const car = genCar('Fusca', 'Branco');
// car.turnOn();

// Uma expressão de função de seta é uma alternativa compacta a uma expressão de função tradicional,
// mas é limitada e não pode ser usada em todas as situações.

// Existem diferenças entre as funções de seta e as funções tradicionais, bem como algumas limitações:

// Não têm suas próprias ligações para this, arguments ou super, e não devem ser usadas como métodos.
// Não têm acesso à palavra-chave new.target.
// Não são adequadas para métodos call, apply e bind, que geralmente dependem do estabelecimento de um escopo.
// Não podem ser usadas como construtores.
// Não podem usar yield, dentro de seu corpo.

/* Classes */

// class Car {
//   model = 'Fusca';
//   color = 'Branco';
// }

// const car = new Car();
// const car = Car();
// console.log(car);

/* Construtores */

// class Car {
//   constructor(model, color) {
//     this.model = model;
//     this.color = color;
//   }
// }

// const car = new Car('Fusca', 'Branco');
// console.log(car);

/* Métodos */

// class Car {
//   constructor(model, color) {
//     this.model = model;
//     this.color = color;
//   }

//   turnOn() {
//     console.log('Ligou');
//   }

//   paint(color) {
//     this.color = color;
//   }
// }

// const car = new Car('Fusca', 'Branco');
// console.log(car);

// car.paint('Black');

// console.log(car);

// const car1 = new Car('Impala 1967', 'Preto');
// const car2 = new Car('Uno', 'Roxo Iris');

// console.log(car1);
// console.log(car2);

// car1.paint('Rosa Chock');

// console.log(car1);
// console.log(car2);

/* Métodos estáticos */

// class Car {
//   constructor(model, color) {
//     this.model = model;
//     this.color = color;
//   }

//   turnOn() {
//     console.log('Ligou');
//   }

//   paint(color) {
//     this.color = color;
//   }

//   static greetings() {
//     console.log('Hello World!');
//     console.log(this);
//   }
// }

// const car = new Car('Fusca', 'Preto');

// console.log(car.greetings);
// console.log(Car.greetings);

// Car.greetings();

/* Estendendo classes */

// class Employee {
//   constructor(name, role, wage) {
//     this.name = name;
//     this.role = role;
//     this.wage = wage;
//   }

//   promote() {
//     const newWage = this.wage * 1.15; // 15%

//     this.wage = Math.floor(newWage);
//   }
// }

// class Boss extends Employee {
//   constructor(name, role, wage) {
//     super(name, role, wage);
//   }

//   scream() {
//     console.log('AAAAAAAAAAaaaaaa');
//   }
// }

// const employee = new Employee('Miguel', 'Desenvolvedor', 3000);
// const boss = new Boss('Victor', 'CEO', 32000);

// console.log(employee);
// console.log(boss);

// console.log(employee.promote);
// console.log(boss.promote);

// console.log(employee.scream);
// console.log(boss.scream);

// employee.promote();
// boss.promote();

// console.log(employee);
// console.log(boss);

/* Sobrescrevendo métodos */

// class Employee {
//   constructor(name, role, wage) {
//     this.name = name;
//     this.role = role;
//     this.wage = wage;
//   }

//   promote() {
//     const newWage = this.wage * 1.15; // 15%

//     this.wage = Math.floor(newWage);
//   }

//   toString() {
//     return `${this.name}, ${this.role}`;
//   }
// }

// class Boss extends Employee {
//   constructor(name, role, wage) {
//     super(name, role, wage);
//   }

//   scream() {
//     console.log('AAAAAAAAAAaaaaaa');
//   }

//   promote() {
//     const newWage = this.wage * 1.25; // 25%

//     this.wage = Math.floor(newWage);
//   }
// }

// const employee = new Employee('Miguel', 'Desenvolvedor', 3000);
// const boss = new Boss('Victor', 'CEO', 32000);

// console.log(employee);
// console.log(boss);

// employee.promote();
// boss.promote();

// console.log(employee);
// console.log(boss);
