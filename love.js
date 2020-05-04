document.querySelector("h1").style.fontSize = "5rem";
document.querySelector("h2").style.fontFamily = "'Dancing Script', cursive";


var randomNumber = Math.floor(Math.random() * 100 + 1);
function myFunction(randomNumber){

    if (randomNumber >= 80 && randomNumber <= 100) {
      document.querySelector(".hey").innerHTML = "whoo your love chemistry is " + randomNumber +"% and is like laila and majnu!";

    } else if (randomNumber >= 50 && randomNumber <= 80) {
      document.querySelector(".hey").innerHTML = "your love chemistry is " + randomNumber +"% .Your love is average.";
    } else {
      document.querySelector(".hey").innerHTML = "ohh! your love chemistry is " + randomNumber +"%.You are not in love.";
    }


}
