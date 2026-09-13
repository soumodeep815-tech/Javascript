// Symbols is data type ,introduced in ES6(2015);
//Symbols are alwys unique. even if they have same description.

let sym=Symbol("No Description");
let sym1=Symbol("Non Description");
let symb=Symbol("12345679");


console.log(sym===sym1);//Same Description but false beacause symbols are alwys unique.
