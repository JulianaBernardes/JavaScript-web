function salaryIncrease(workPlan, currentSalary) {
    let newSalary
    switch (workPlan) {
        case 'A':
            newSalary = currentSalary * 1.10
            console.log(newSalary)
            break;
        case 'B':
            newSalary = currentSalary * 1.15
            console.log(newSalary)
            break;
        case 'C':
            newSalary = currentSalary * 1.20
            console.log(newSalary)
            break;
        default:
            console.log('Invalid plan.')
    }
}
salaryIncrease('A', 600)
salaryIncrease('B', 1000)
salaryIncrease('C', 2000)