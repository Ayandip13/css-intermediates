//Shallow copy
let arr = [1, 2, 3, 4, "Hello", { name: "ayandip" }, [1, 2, 3]]
let arrB = arr

arrB.splice(0, 4)
//console.log(arrB, "   ", arr);        //Here arrB and arr both are pointed to the same array or same memory location

//Deep copy
let arrC = [...arr]
let arrD = Array.from(arr)

arrC.splice(0, 4)
arrD.splice(0, 4)
console.log(arrC, arrD)

