//function
//addition

//Types Of Function
//Function Keyword
//Anonymous
//Arrow
//IFFE //Imediately Inworking Function


//General Sample
function add(a,b)
{
    return a+b
}
console.log(add(10,12))
console.log(add("Kavuthami","S"))

//function keyword()
function names(data)
{
    for(var i=0;i<=data.length;i++)
{    
    console.log(data[i])
}
}
names(["abc","123","cdf"])

//Anonymous Function(without function name)
var namess = function(da){
    for(var a=0;a<da.length;a++)
    {
        console.log(da [a])
    }
}
namess["abcrt","12354","cdfe"]

//Arrow Function(without function name and function keyword)
var namess = (da)=>{
    for(var a=0;a<da.length;a++)
    {
        console.log(da [a])
    }
}
namess["abcrt","12354","cdfe"]



//IIFE Function
((data)=>{
    for(var a=0;a<da.length;a++)
{
    console.log(da [a])
}
})(["abcrt","12354"])

////IIFE Function
(function  (data){
    for(var a=0;a<da.length;a++)
{
    console.log(da [a])
}
})(["abcrt","12354"])

