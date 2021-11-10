"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = factorialize;

function factorialize(num) {
  //récupérer tous les entiers inférieurs ou égales
  var sum;
  var integer = [];

  for (var i = 1; i <= num; i++) {
    var n = integer.push(i);
  }
  /*multiplier tous les entiers du tableau
    et retourner le produit total ou 1 si factoriser 0*/


  if (num !== 0) {
    var reducer = function reducer(previousValue, currentValue) {
      return previousValue * currentValue;
    };

    console.log(integer.reduce(reducer));
    sum = integer.reduce(reducer);
  } else {
    console.log(1);
    return sum = 1;
  }

  return sum;
}

factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0);