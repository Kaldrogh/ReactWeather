// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(18);
//       reject('Ville inexistante');
//     }, 2000);
//   });
// }
//
// getTempPromise('Paris').then(function (temp) {
//   console.log('promise success : ', temp);
// }, function (err) {
//   console.log('promise error : ', err);
// });

function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject("Un des deux arguments n'est pas un nombre");
    }
  });
}

addPromise(18, 18).then(function (res) {
  console.log("Voici votre résultat : " + res);
}, function (err) {
  console.log("Erreur : " + err);
});

addPromise('caca', 18).then(function (res) {
  console.log("Voici votre résultat : " + res);
}, function (err) {
  console.log("Erreur : " + err);
});
