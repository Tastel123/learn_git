const people = [
    { age:16, name:'roger'},
    { age:99, name:'vinny'},
    { age:24, name:'don'},
    { age:74, name:'brendan'}
]
var orderPeople = function(people){
    return people.sort((a,b) => {
        return b.age - a.age 
    })
}
console.log(orderPeople(people));