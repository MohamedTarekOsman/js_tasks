var arr = [
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best`,
  `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.<br><br>― Marilyn Monroe`,
  `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”<br><br>― Albert Einstein`,
  `So many books, so little time.<br><br>― Frank Zappa`,
  `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
<br><br>― Bernard M. Baruch`,
  `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”<br><br>― William W. Purkey`,
  `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
<br><br>― Dr. Seuss`,
];
var sameNumber = 0;
function getRandomNumber() {
  var num;
  do {
    num = Math.floor(Math.random() * arr.length);
  } while (num === sameNumber);
  {
    sameNumber = num;
    document.getElementById("changeChar").innerHTML = arr[num]; //line(VIP)
  }
}
