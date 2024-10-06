let arr = [1, 2, 3, 4, "Hello", { name: "ayandip" }, [1, 2, 3]]

// function check(target) {
//     for (const x of arr) {
//         if (x == target) {
//             return arr[x]
//         }
//     }
//     return false
// }
// console.log(check("Hello"))

let check = (target) => {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == target) {
            console.log(i);
        }
    }
}

console.log(check("Hello"))





