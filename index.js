var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDice="dice"+randomNumber1+".png";//dice no from 1-6;
var randomDiceImage="/home/anand/Desktop/web development/DOM/images/"+randomDice;
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

//winning conditions;
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 Won";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="Player2 Won";
}
else{
  document.querySelector("h1").innerHTML="Match Draw!";
}
