function classifyTriangle(length1, length2, length3) {    
    if (length1 != null && length2 != null && length3 != null) {

        if (length1 === length2 && length1 === length3 && length2 === length3) {
            console.log('Triangle equilateral')
        } else if 
        (length1 !== length2 && length1 !== length3 && length2 !== length3){
            console.log('Triangle scalene')
        } else{
            console.log('Triangle isosceles')
        }
    } else {
        console.log('Invalid length')
    }
}
classifyTriangle(1,2,3)
classifyTriangle(1,1,3)
classifyTriangle(1,1,1)
classifyTriangle(1)