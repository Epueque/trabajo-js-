//#region variables
const nombre = `Rocio`;
let nombre2 = "Tomas";
var dni = '59677854';
//#endregion variables

//#region nombres
console.log(nombre);
console.log(nombre2);
console.log(dni);
//#endregion nombres

//#region suma

function suma(num1, num2) {
    let k = num1 + num2;
    return k;
}
let num1 = 20;
let num2 = 20;
console.log(suma(num1, num2));
//#endregion suma

//#region resta
function resta(numero1, numero2) {
    let y = numero1 - numero2;
    return y;
}
let numero1 = 60;
let numero2 = 30;
console.log(resta(numero1, numero2));
//#endregion resta

//#region multiplicacion
function multiplicacion(x, y) {
    let t = x * y;
    return t;
}
let x = 5;
let y = 6;
console.log(multiplicacion(x, y));
//#endregion multiplicacion

//#region division
function division(r, a) {
    let h = r / a;
    return h;
}
let r = 90;
let a = 30;
console.log(division(r, a));
//#endregion division