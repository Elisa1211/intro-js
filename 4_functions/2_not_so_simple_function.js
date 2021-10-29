function megaSum(){
   

    var sum = 0
    for (var i = 0; i < arguments.length; i++){
        if(typeof(arguments[i]) == "number"){
            sum += arguments[i]
        }
    }
    return sum
 // recorrer arguments y acumular la suma de cada elemento
}


console.log(megaSum(1))
console.log(megaSum(1,2,3)) //=> 6
console.log(megaSum(1,2,3,4)) // => 10
console.log(megaSum(1,"hola",3)) // => 4
