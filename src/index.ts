"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let conntinue:boolean = true;
var R:number = 0;
var C:number = 0;
var Z:number = 0;
var X:number = 0;
var Y:number = 0;

try {
    var R:number = parseFloat(prompt("Enter R: "));
    isIntegerF(R);
    var C:number = parseFloat(prompt("Enter C: "));
    isIntegerF(C);
    var Z:number = parseFloat(prompt("Enter Z: "));
    isIntegerF(Z);
    var X:number = parseFloat(prompt("Enter X: "));
    isIntegerF(X);
    var Y:number = parseFloat(prompt("Enter Y: "));
    isIntegerF(Y);
}catch (error){
    console.log(error);
}

function isIntegerF(num:number){
    if(!Number.isInteger(num)){
        console.log("ingresó un dato inválido");
        conntinue = false;
    }
}
if(X>=C || Y>=R){conntinue = false;}

let matriz: Array<Array<number>> =[];

if(conntinue){
    console.log("Start")
    var iterateList:number[] = [];
    for(var i=0; i<R; i++){
        for(let j=0; j<C; j++){    
            iterateList.push(Z+i)
        }
        matriz.push(iterateList)
        iterateList=[]
    }
    var cont:number = 0;
    for(var k=0; k<=Y; k++){
        cont += (Z+k)*(X+1)
    }
    console.log(matriz)
    console.log(cont)
    console.log("Fin")
}
else{console.log("No se pudo procesar por malos datos");}