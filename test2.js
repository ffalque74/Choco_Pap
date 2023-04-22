
var value = 1;

console.log("valeur de value : ",value);



const val = 'Hello World';
 
if (typeof value === 'string') {
    console.log('Variable is a string');
    var controle = value;
    sessionStorage.setItem('controle', value);
}
else {
    console.log('Variable is not a string');
    var data = sessionStorage.getItem('controle');
}
console.log("valeur de controle : ",controle);
