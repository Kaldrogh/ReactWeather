var names = ['Marc', 'Tromezee', 'Panita', 'Néo'];
//
// names.forEach(function (name) {
//   console.log('forEach : ', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc : ', name);
// });
//
// names.forEach((name) => console.log('forEachReduc :', name));

// var person = {
//   name: 'Marco',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();


((a, b) => console.log(a + b))(1, 9);

var addThis = (a, b) => {
  console.log(a + b);
};

addThis(4, 5);
