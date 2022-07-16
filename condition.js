//if..else

var val = 40;
if (val > 50) {
    console.log("value is greater than 50")
}
else {
    console.log("value is less than 50")

}

//(! condition)
var val = []
var val = ["hi", "welcome", "all"]

if (!val.length) {
    console.log("given array is empty")
}
else {
    console.log(val[2])
    console.log(val[3])
}

//ternary operator
var val = []
var val = ["kaa", "welcome", "all"]
var output = !val.length ? console.log("Empty array") : console.log(val[0])

//if.....elseif......else

var val = ["baby", "cute", "boy"]
if (!val.length) {
    console.log("if executed")

}
else if (val[1] == "cute") {
    console.log("elseif executed")
}
else {
    console.log("else executed")
}


//&& 

var val = ["hello", "Good", "morning", "everyone"]
if (!val.length) {
    console.log("When a val.length is empty if will exeute && operator")
}
else if (val[3] == "everyone" && val[val.length - 1] == "every") {
    console.log("elseif executed && operator")
}
else {
    console.log("esle executed in && operator")
}

//||


var val = ["hello", "Good", "morning", "everyone"]
if (!val.length) {
    console.log("When an val.length is empty if will exeute || operatro")
}
else if (val[3] == "everyone" || val[val.length - 1] == "every") {
    console.log("elseif executed in || operatro")
}
else {
    console.log("esle executed || operatro")
}


//name checking
var myName = "Kavuthami"

if (myName[0] == "K") {
    if (myName.length > 12)//false so goto else
    {
        console.log("name validation staisfied")
    }
    else {
        console.log("2nd if validation failed")
    }
}
else {
    console.log("1st if validation failed")
}

var myName = "Kavuthami"

if (myName[0] == "k")//false so goto else
{
    if (myName.length > 12) {
        console.log("name validation staisfied")
    }
    else {
        console.log("2nd if validation failed")
    }
}
else {
    console.log("1st if validation failed")
}


//switch case

var operator = '-';
//var operator;
//operator;
var n1 = 10;
var n2 = 20;
var result;


switch (operator) 
{
    case '+':
        result = n1 + n2;//n1+n2=30
        console.log(result)
        break;
    case '-':
        result = n1 - n2;//n1-n2=-10
        console.log(result)
        break;
    case '*':
        result = n1 * n2;//n1*n2=200
        console.log(result)
        break;
    case '/':
       result = n1 / n2;//n1/n2=0.5
      console.log(result)
        break;
    default:
        result = "operator not defined"
        console.log(result)
}
