var game1 = 1.0;
var game2 = 0.3;
var game3 = 0.6;
var game4 = 0.8;
var game5 = 0.7;
var game6 = 0.2;

function populateh8() {
  if ((game1 >= 0) & (game1 <= 0.4)) {
    $("#K1").html("Beginner");
  } else if ((game1 > 0.4) & (game1 <= 0.7)) {
    $("#K1").html("Intermediate")
  } else {
    $("#K1").html("Advanced");
  }
  if ((game2 >= 0) & (game2 <= 0.4)) {
    $("#K2").html("Beginner");
  } else if ((game2 > 0.4) & (game2 <= 0.7)) {
    $("#K2").html("Intermediate")
  } else {
    $("#K2").html("Advanced");
  }
  if ((game3 >= 0) & (game3 <= 0.4)) {
    $("#K3").html("Beginner");
  } else if ((game3 > 0.4) & (game3 <= 0.7)) {
    $("#K3").html("Intermediate")
  } else {
    $("#K3").html("Advanced");
  }
  if ((game4 >= 0) & (game4 <= 0.4)) {
    $("#K4").html("Beginner");
  } else if ((game4 > 0.4) & (game4 <= 0.7)) {
    $("#K4").html("Intermediate")
  } else {
    $("#K4").html("Advanced");
  }
  if ((game5 >= 0) & (game5 <= 0.4)) {
    $("#K5").html("Beginner");
  } else if ((game5 > 0.4) & (game5 <= 0.7)) {
    $("#K5").html("Intermediate")
  } else {
    $("#K5").html("Advanced");
  }
  if ((game6 >= 0) & (game6 <= 0.4)) {
    $("#K6").html("Beginner");
  } else if ((game6 > 0.4) & (game6 <= 0.7)) {
    $("#K6").html("Intermediate")
  } else {
    $("#K6").html("Advanced");
  }
}
