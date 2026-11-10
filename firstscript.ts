// let firstname: string = "Heritage"
// console.log(firstname)

function circleArea(radius: number) {

    console.log(Math.PI * radius * radius)
}

// circleArea(7)

function Area(radius: number, height?: number): any {
    var baseArea = Math.PI * radius * radius
    console.log(`Base Area = ${baseArea}`)
    if (height !== undefined) {
        var sideArea = 2 * Math.PI * radius * height
        console.log(`SideArea = ${sideArea}`)
        var result = `Base Area + Side Area = ${sideArea + baseArea}`
        console.log(result)
        return result
    }

}

// var functionResult = Area(6, 46)
// console.log(functionResult)
async function getCityTemperature(city: string): Promise<number> {
    const response = await fetch(`https://api.example.com/weather?city=${city}`)
    var data = await response.json()
    console.log(data)
    return data
}

getCityTemperature("Lagos")