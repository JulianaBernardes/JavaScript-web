const nums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums) {
    if (x == 5) {
        break
    }
    console.log(`Index ${x} = ${nums[x]}`)
}

for (y in nums) {
    if(y == 5) {
        continue //interrupts at index 5 and goes to the next repeat
    } 
    console.log(`Index ${y} = ${nums[y]}`)
}

extern: for (a in nums) {
    for(b in nums) {
        if(a == 2 && b == 3) break extern
        console.log(`Pair = ${a}, ${b}`)
    }
}

console.log('End!')
