let healthPlanPrice = 100
age = 10

if (age < 10) {
    healthPlanPrice += 80
    console.log(healthPlanPrice)  

} else if (10 <= age && age < 30) {
    healthPlanPrice += 50
    console.log(healthPlanPrice)

} else if (30 <= age && age < 60) {
    healthPlanPrice += 95
    console.log(healthPlanPrice)

} else if (age > 60 && age < 130){
    healthPlanPrice += 130
    console.log(healthPlanPrice)
} else {
    console.log('Invalid age')
}