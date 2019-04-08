//business logic
var player1="";
var player2="";

var throwdice = function () {
  return Math.floor(6*Math.random())+1;
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

//player1
Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
  // this.changeturn();
  } else {
  this.tempscore += this.roll;
  }
}

// hold
Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  //this.changeTurn();
  alert(this.playerName + ", your turn is over, pass the mouse!");
}

//on completing the game
Player.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.playerName + " You are the winner!");
  }
}

player.prototype.newGame = function () {
  //debugger;
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName ="";
}

var clearValues = function(){
  $(".player1Name").val("");
  $(".player2Name").val("");
}
