/*
escreva uma função que recebe duas strings , digamos a e b, como argumentos.

se a contém b, anexe b ao inicio de a, se nao , anexe b ao final e retorne a concatenação.
*/

function myFunction(a, b){
    let array = [];

    if(a.indexOf(b) !== -1){
        array.push(b + a);
        return array;
    } else {
        array.push(a + b);
        return array;
    }
}
console.log(myFunction);