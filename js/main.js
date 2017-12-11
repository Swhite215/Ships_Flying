//Array of Ships
var pilotsArray = [
 pilotObject_9 = {
  name: "Purple",
  color: "purple",
  image: "../images/combatant_purple_devil.png",
  pilot: "../images/purple_devil_pilot.png",
  particleDirection: "top"
}, pilotObject_10 = {
  name: "Red",
  color: "red",
  image: "../images/combatant_red_devil.png",
  pilot: "../images/fire_devil_pilot.png",
  particleDirection: "top"
}, pilotObject_11 = {
  name: "Black",
  color: "grey",
  image: "../images/combatant_black_devil.png",
  pilot: "../images/black_devil_pilot.png",
  particleDirection: "top"
}, pilotObject_12 = {
  name: "Blue",
  color: "blue",
  image: "../images/combatant_blue_devil.png",
  pilot: "../images/blue_devil_pilot.png",
  particleDirection: "top"
}, pilotObject_13 = {
  name: "Yellow",
  color: "yellow",
  image: "../images/combatant_white_devil.png",
  pilot: "../images/yellow_devil_pilot.png",
  particleDirection: "top"
}, pilotObject_14 = {
  name: "Green",
  color: "green",
  image: "../images/combatant_green_devil.png",
  pilot: "../images/green_devil_pilot.png",
  particleDirection: "top"
}, pilotObject_15 = {
  name: "Orange",
  color: "orange",
  image: "../images/combatant_orange_devil.png",
  pilot: "../images/orange_devil_pilot.png",
  particleDirection: "top"
}, pilotObject_16 = {
  name: "Silver",
  color: "silver",
  image: "../images/combatant_silver_devil.png",
  pilot: "../images/silver_devil_pilot.png",
  particleDirection: "top"
} ];

var lastIndex = 0;
var index;

//Update Background Color
function updateBackground(index) {
  $("#particles-js").animate({backgroundColor: pilotsArray[index].color });
}

//Update Border Colors
function updateBorders(index) {
  $(".pilot-info").css("border-bottom", "1px solid " + pilotsArray[index].color);
  $(".pilot-engage").css("border-bottom", "1px solid " + pilotsArray[index].color);
  $(".pilot-ship h1").css("border", "1px solid " + pilotsArray[index].color);
  $(".pilot-ship h2").css("border", "1px solid " + pilotsArray[index].color);
  $("canvas").css("border", "1px solid " + pilotsArray[index].color);
}

//Update Pilot Information
function updatePilotText(index) {
  $(".pilot-info").text("---- " + pilotsArray[index].name + " Pilot ----");
}

//Particle Direction Up or Down
function updateParticles(index) {
  var indicator = pilotsArray[index].particleDirection;

  if (  pJSDom[0].pJS.particles.move.direction !== indicator) {
    pJSDom[0].pJS.particles.move.direction = indicator;
    pJSDom[0].pJS.fn.particlesRefresh();
  } else {
    return;
  }
}

//Update Ship Sprite
function updateShip(index) {
  $("#ship-image").fadeOut("quick", function() {
    updateBackground(index);
    updateParticles(index);
    $(this).attr("src", pilotsArray[index].image);
  });

  $("#ship-image").fadeIn("quick");
}

//Update Pilot Sprite
function updatePilot(index) {
  $(".pilot-image").fadeOut("quick", function() {
    $(this).attr("src", pilotsArray[index].pilot);
  });
  $(".pilot-image").fadeIn("quick");
}

//Create Index for Ship Sprite
function createIndex() {
  var index = Math.floor(Math.random() * pilotsArray.length);
  return index;
}

var lastIndex;

//Running Interval
var myVar = setInterval(function() {

    index = createIndex();

    if (index == lastIndex) {
      index = createIndex();
      updatePilot(index);
      updatePilotText(index);
      updateBorders(index);

      // updateBackground(index);
      // updateShip(index);

      index = lastIndex;
    } else {
      updatePilot(index);
      updatePilotText(index);
      updateBorders(index);

      // updateBackground(index);
      // updateShip(index);

      index = lastIndex;
    }

}, 5000);

//
// function buildSquares() {
//    for (var i = 1; i <= 200; i++) {
//      var square = $("<div>");
//      var width = window.innerWidth / 10 - 10;
//      var height = window.innerHeight /10 - 10
//      square.css("width", width).css("height", height);
//      square.addClass("square").css("border", "1px solid white");
//      square.css("grid-area", i);
//      $(".container").append(square);
//    }
//  }
//
//  // buildSquares();
//
//  function colorSquares() {
//    var colors = ["red", "green", "orange", "black", "white", "yellow", "silver", "purple"];
//    var index = Math.floor(Math.random() * colors.length + 1);
//    $(".square").css("border", "1px solid" + " " + colors[index]);
//
//  }
//
//  // var myVar = setInterval(function() {
//  //   colorSquares();
//  // }, 1000);
//

//INCLUDE ONCE YOUR CREATE PILOT PORTRAITS FOR EACH HERO SPIRIT
// pilotObject_1 = {
// name: "vi_vanquisher",
// color: "#000000",
// image: "../images/ship_vi_vanquisher.png",
// particleDirection: "bottom"
// }, pilotObject_2 = {
// name: "rokh_racer",
// color: "#000000",
// image: "../images/ship_rokh_racer.png",
// particleDirection: "bottom"
// }, pilotObject_3 = {
// name: "joxos_charger",
// color: "#000000",
// image: "../images/ship_joxos_charger.png",
// particleDirection: "bottom"
// }, pilotObject_4 = {
// name: "flare_fighter",
// color: "#000000",
// image: "../images/ship_flare_fighter.png",
// particleDirection: "bottom"
// }, pilotObject_5 = {
// name: "garos_griever",
// color: "#000000",
// image: "../images/ship_garos_griever.png",
// particleDirection: "bottom"
// }, pilotObject_6 = {
// name: "light_leader",
// color: "#000000",
// image: "../images/ship_light_leader.png",
// particleDirection: "bottom"
// }, pilotObject_7 = {
// name: "inferno_blazer",
// color: "#000000",
// image: "../images/ship_infernos_blazer.png",
// particleDirection: "bottom"
// }, pilotObject_8 = {
// name: "black_dealer",
// color: "#000000",
// image: "../images/ship_black_dealer.png",
// particleDirection: "bottom"
// },
