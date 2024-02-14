// alert("hello");

var uNumber = Number(prompt("siz istagan sonni kiriting"));

var three = "Fizz";
var five = "Buzz";

var threeTotal = 0;
var fiveTotal = 0;
var threeFive = 0;

for (var i = 1; i <= uNumber; i++) {
  if (i % 3 === 0 && i % 5 == 0) {
    threeFive++;
    console.log(three + five);
  } else if (i % 3 == 0) {
    threeTotal++;
    console.log(three);
  } else if (i % 5 == 0) {
    fiveTotal++;
    console.log(five);
  }
}

alert(
  `${uNumber} sonigacha bo'lgan sonlar ichida
     3 ga bo'linuvchi sonlar: ${threeTotal} ta,
     5 ga bo'linuvchi sonlar: ${fiveTotal} ta, 
     3 ga ham 5 ga ham bo'linuvchi sonlar: ${threeFive} ta `
);

// console.log(uNumber);
