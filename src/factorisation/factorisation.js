export default function factorialize(num) {
  //récupérer tous les entiers inférieurs ou égales
  let sum;
  let integer = [];
  for (let i = 1; i <= num; i++) {
    const n = integer.push(i);
  }
  /*multiplier tous les entiers du tableau
    et retourner le produit total ou 1 si factoriser 0*/
  if (num !== 0) {
    const reducer = (previousValue, currentValue) => {
      return previousValue * currentValue;
    };
    console.log(integer.reduce(reducer));
    sum = integer.reduce(reducer);
  } else {
    console.log(1);
    return (sum = 1);
  }
  return sum;
}

factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0);
