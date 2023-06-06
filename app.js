//--------------ARRAY USING *FOR* LOOP-----------------//


const arrayLoopingUsingFor = () =>{
    let arr = ["Number1" , "Number2" , "Number3",["Number4-array2-start" , "Number5" , "Number6", ["Number  7-array3-start", "Number8", "Number9"] ]]

    let arrayLength = arr.flat(2);
    for (let i = 0; i < arrayLength.length; i++) {
       console.log(arrayLength[i])
    }
} 

arrayLoopingUsingFor()




//--------------ARRAY USING *WHILE* LOOP-----------------//






let arr2 = [1 , 2, 3, 4, [5 ,6, 7, 8,[9, 10 ,11, 12]]]


function arrayLoopUsingWhile(){
    let arrayLength2 = arr2.flat(2);

    let j = 0;
    while (j < arrayLength2.length){
       console.log(arrayLength2[j])
       j++
    }

}

arrayLoopUsingWhile()






//--------------ARRAY USING *WHILE DO* LOOP-----------------//



let arr3 = ["a" , "b" , "c" , ["d" , "e" , "f" , ["g" , "h" , "i"]]]


function arrayLoopUsingWhileDo(){
    let arrayLength3 = arr3.flat(2);

    let k = 0;
    do{
       console.log(arrayLength3[k])
       k++
    }
    while (k < arrayLength3.length)

}

arrayLoopUsingWhileDo()





// ---- ARRAY LOOPING THE FUNCTIONS -----//


let arrGeneral = [arrayLoopingUsingFor(), [arrayLoopUsingWhile(),
[arrayLoopUsingWhileDo()
]]]


let  arrGeneralLength = arrGeneral.flat(4);

for (let l = 0; l < arrGeneralLength.length; l++){
    console.log(arrGeneralLength[l])
}






// ---- ARRAY LOOPING USING FOR IN -----//



const numbers = [45, 4, 9, 16, 25 , [80, 50 ,2, 4 , [0, 5 , 66, 7]]];

let arraylength = numbers.flat(3)

for (let x in arraylength) {
    console.log(arraylength[x])
}








// ---- ARRAY LOOPING USING FOR OF -----//







const cars = ["BMW", "Volvo", "Mini" , ["benz" , "ford" , ["camry" , "lexus"]]];

let arrayLength = cars.flat(2);

for (let x of arrayLength) {
    console.log(x)
}