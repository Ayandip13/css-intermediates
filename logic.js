function sumNumber(array) {
    for (const i of array) {
        for (const j of array) {
            if (i + j === 0) {
                return [i , j]
            }
        }
    }
}

console.log(sumNumber([-5, -4, -3, -2, 0, 2, 4, 6, 8]))