

var password = ;
var userID = ;

if (userID == password) {
  alert("Login ID and password cannot match")
}

function isReqLength(password,userID) {
  if (password.length < 6 && userID.length < 6){
    alert("Login ID and password must be greater than 6 characters")
}

function userReqChar(userID) {
  if (userID.includes("!") || userID.includes("$") || userID.includes("#")) {
    alert("You can't have any of the following special characters: $#!");
  } else {
}

function passReqChar(password) {
  if (password.includes("!") || password.includes("$") || password.includes("#")) {
    alert("You need to have at least one of the following special characters: $#!")
  } else {
    alert("you're ok!")
  }
}
