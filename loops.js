// for,for...of..., for...in,while,do...while
//for loop
console.log("_________ for loop___________")
var a=10
//for(intialization;condition;increment/decrement)
for(var i=0;i<a;i++)
{
    console.log(i)
}
console.log("_________Array  with for loop___________")

//Array  with for loop
var names=["Abi","sudha","charu"]
for(i=0;i<names.length;i++)
{
    console.log(names[i])
}

console.log("_________Array with while___________")
var names=["Bavya","Muruga","Dhanya","Kiruba","Saras"]
var i=0
//while(condition;increment/decreemnt)
while(i<names.length)
{
    console.log(names[i])
    i++
}

var names=["Bavya","Muruga","Dhanya","Kiruba","Saras"]
var i=0
//while(condition;increment/decreemnt)
while(i<names.length)
{
    console.log(names[i])
    i++
}



console.log("______Array with do... while___________")
var names=["lilli","roja","meera","Kayal","maya"]
var i=0
do{
    
    console.log(names[i])
    i++
}
while(i<names.length)

//for....in based on object

console.log(".for..in.....gives numbers key___________")
for(var i in names)
{
    console.log(i)
}

console.log(".for..in.....gives values(names)___________")
for(var i of names)
{
    console.log(i)
}

console.log(".for..in.....gives numbers(key) and output with names______")
for(var i in names)
{
    console.log(names[i])
}

console.log("-----for with username------")
for(var username of names)
{
    console.log(username)
}
