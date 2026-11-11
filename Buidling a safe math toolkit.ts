function square(num: number): number {
    return num * num;
}


let result = square(5)
console.log(result)

function getAverage(param: number[]) {
    var total = param.reduce((acc, n) => {
        acc = acc + n
        return acc
    }, 0)
    return total / param.length
}

console.log(getAverage([24, 54, 45, 56, 76, 39]))


function raiseTo(base: number, exponent?: number): number {
    var result = exponent ? base ** exponent : base ** 2
    return result
}

let raisedResult = raiseTo(2, 3)
console.log(raisedResult)

let id: string | number = "Heritage"
console.log(id.toUpperCase())

function produceRoot(num: unknown) {
    if (typeof num === "number") {
        console.log(Math.sqrt(num))
    }
    else{
        console.log("Type is not a number")
    }
}

produceRoot(49)
// produceRoot("Heritage")

const submitBtn = <HTMLButtonElement>document.querySelector(".submit-btn")