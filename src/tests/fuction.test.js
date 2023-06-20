
const multiply = (a,b)=>{
    return a*b
}

// si cuando le pase multiply(2,2) return => 4

test("multiply(2,2) should return 4",()=>{
    expect(multiply(2,2)).toBe(4)
})

const average = (a,b,c)=>{
    return (a+b+c)/3
}

test("average(5,10,15) should return 10", ()=>{
    expect(average(5,10,15)).toBe(10)
})

const convert = (celcius)=>{
    const res = (celcius * 9/5) + 32
    return res
}

test("convert(20) should return 68",()=>{

    expect(convert(20)).toBe(68)
})


