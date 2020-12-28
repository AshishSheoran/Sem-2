/**
 * WEB222 â€“ Assignment 01
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: <ASHISH SHEORAN>
 *      Student ID: <162543177>
 *      Date: <SUBMISSION_DATE>
 *
 * Follow all instructions in README.md
 */

/**
 * Task 1 - format a file path as a Windows or Unix path.
 */
function formatPath(dir, filename, ext, windowsDrive) {
  if(windowsDrive){
   console.log(windowsDrive + "\\" + dir + "\\" + filename + ext);
  }
  else
     console.log("/" + dir + "/" + filename + ext);
}
formatPath("ashu","study",".txt","C:");         //OUTPUT = C:\ashu\study.txt
formatPath("documents","resume",".doc");        //OUTPUT = /documents/resume.doc
formatPath("cristiano","goals"," ","D:");       //OUTPUT = D:\cristiano\goals

/**
 * Task 2 - Write a Function Expression to convert a temperature in Celsius

 */
var tempToKelvin = function(temp, unit) {
 if(unit == "c" || unit == "C"){
    console.log(temp+273.15+"K");
  }
  else if(unit == "f" || unit == "F" || unit == " ") {
    console.log((temp-32)*5/9+273.15+"K");
  }
  else
    console.log("unknown unit");
};

tempToKelvin(5,"c");          //OUTPUT = 278.15K
tempToKelvin(32,"F");         //OUTPUT = 273.15K
tempToKelvin(32," ");         //OUTPUT = 273.15K
tempToKelvin(34,"g");         //OUTPUT = unknown unit

/**
 * Task 3 - find the smallest number in a list.
 */
function findSmallest() {
  var a = arguments;
  if(a.length>0){
     var small=a[0];
     for(var i = 1; i<a.length;i++){
       if(small>a[i]){
         small=a[i];
       }
     }console.log(small)
  }
  else
    return console.log(Number.MIN_VALUE);
}

findSmallest(4,7,3,8,9,6);             //OUTPUT = 3
findSmallest(45,75,1006,2,99,"0");     //OUTPUT = 0
findSmallest();                        //OUTPUT = 5e-324

/**
 * Task 4 - find all odd numbers in a list.
 */
function oddNumbers() {
  var a = arguments;
  var k=0;
  var number = [];
  for(var i = 0; i < a.length; i++) {
    if(a[i]%2!=0){
      number[k]=a[i];
      k++;
    }
  }
  for(i=0;i<number.length;i++) {
    for(var j =0; j<number.length-i;j++) {
      if(number[j]>number[j+1]) {
        var temp = number[j];
        number[j] = number[j+1];
        number[j+1] = temp;
      }
    }
  }
    console.log(number);
}

oddNumbers(1,5,8,4,19,23,28);           //OUTPUT = 1,5,19,23
oddNumbers(99,45,63,22,88,43);          //OUTPUT = 43,45,63,99

/**
 * Task 5 - calculate the Harmonized Sales Tax (HST) for a value in cents.
 */
var addHST = function(cents = 0){
if(cents > 13){
  var HST = 1.13 * cents;
  console.log(HST);
}
else {
  console.log(cents);
}
}

addHST(12);         //OUTPUT = 12
addHST();           //output = 0
addHST(50);         //output = 56.49999999

/**
 * Task 6 - calculate tax for all purchase items in a sale.
*/

var orderTotalWithTax = function(){
  var args = arguments;
  var sum = 0;
  for(var i = 0; i < args.length; i++ ){
    sum = sum + addHST(args[i]);
  }
  console.log("$ "+ sum);
}

var addHST = function(cents = 0){
  if(cents > 13){
    var HST = 1.13 * cents;
    return HST;
  }
  else {
    return cents;
  }
}

orderTotalWithTax();

orderTotalWithTax();           //OUTPUT = $0
orderTotalWithTax(50,45);      //OUTPUT = $107.35

/**
 * Task 7 - make name=value pairs ready for inclusion on a URL's query string
 */
function buildQueryString(productName, quantity, isGift) {
  if(arguments[2]!=true) {
    console.log("?p=" +productName + "&q=" + parseInt(quantity));
  }
  else {
    console.log("?p=" +productName + "&q=" + parseInt(quantity) + "&gift");
  }
}

buildQueryString("pro",6);              //OUTPUT = ?p=pro&q=6
buildQueryString("shirt",6,true);       //OUTPUT = ?p=shirt&6&gift

/**
 * Do not modify the following code, which exposes your functions to the tests.
 */
module.exports = {
    formatPath,
    tempToKelvin,
    findSmallest,
    oddNumbers,
    addHST,
    orderTotalWithTax,
    buildQueryString
};
