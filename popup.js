alert("check all details in the form")
confirm("confirm to submit")
var choose = prompt("select which operation perform 1.add 2.sub 3.multi")
var a = Number(prompt("Enter First number :"))
var b = Number(prompt("Enter Second Number :"))
switch(choose)
{
    case "1" : document.write("addition : " + (a + b));break;
    case "2" : document.write("subtraction :" + (a-b));break;
    case "3" : document.write("multiplication :" + (a*b));break;
    default :document.write("Wrong option");
}