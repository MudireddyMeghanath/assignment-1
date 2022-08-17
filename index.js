// this program is for leap year 
let checkLeapYear=(year)=> {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
const year = 2002;
checkLeapYear(year);
console.log("ans for leap year");


// This is the program for temperature conversion
 let celToFar=(celsius)=> {
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

let farToCel=(fahrenheit)=> 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var solution = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(solution);
} 
celToFar(60);
farToCel(45);
console.log("conversions");
// this program is for factoral

let fact=(num)=>{
    let sum=1;
   for(let i=1;i<num;i++){
       sum*=i;

   }
   console.log("factorial ans"+sum);
}
fact(5)