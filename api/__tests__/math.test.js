function division(a, b){
    return a/b;
}

test('10/2 equals 5',()=>{
    expect(division(10, 2)).toBe(5)
})

test('15/5 equals 5',()=>{
    expect(division(15, 5)).toBe(3)
})