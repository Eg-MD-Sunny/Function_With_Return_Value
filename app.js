//---Function With return value
function fullname(firstName, lastname){
//---statement 
    var a = firstName + ' ' + lastname;
    return a;
}
var lastName = fullname("Sanat Bin","Sing");
document.write(lastName);
console.log(lastName);


//----Multiply Value find
function MultiplyValue(firstValue,LastValue){
    //---Statement of Calculation
    var value = firstValue*LastValue;
    return value;
}
var multiplyValue = MultiplyValue(5,6);
document.write("The Value is:",multiplyValue);


//---Multiple Mark Summation
function sum(math,bangla,english){
    var summation = math + bangla + english;
    return summation;
}
var total = sum(90,75,95);
//document.write("Total Number:",total);

//---Averave Number find using same function
function percentage(totalmarks){
    var per =(totalmarks/300)*100 ;
    return per;
}
var perValue = percentage(total);
document.write(perValue);