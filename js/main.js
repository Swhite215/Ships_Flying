//Array of Ships
var shipsArray = [
  shipObject_1 = {
  name: "vi_vanquisher",
  color: "#000000",
  image: "../images/ship_vi_vanquisher.png",
  particleDirection: "bottom"
}, shipObject_2 = {
  name: "rokh_racer",
  color: "#000000",
  image: "../images/ship_rokh_racer.png",
  particleDirection: "bottom"
}, shipObject_3 = {
  name: "joxos_charger",
  color: "#000000",
  image: "../images/ship_joxos_charger.png",
  particleDirection: "bottom"
}, shipObject_4 = {
  name: "flare_fighter",
  color: "#000000",
  image: "../images/ship_flare_fighter.png",
  particleDirection: "bottom"
}, shipObject_5 = {
  name: "garos_griever",
  color: "#000000",
  image: "../images/ship_garos_griever.png",
  particleDirection: "bottom"
}, shipObject_6 = {
  name: "light_leader",
  color: "#000000",
  image: "../images/ship_light_leader.png",
  particleDirection: "bottom"
}, shipObject_7 = {
  name: "inferno_blazer",
  color: "#000000",
  image: "../images/ship_infernos_blazer.png",
  particleDirection: "bottom"
}, shipObject_8 = {
  name: "black_dealer",
  color: "#000000",
  image: "../images/ship_black_dealer.png",
  particleDirection: "bottom"
}, shipObject_9 = {
  name: "purple_devil",
  color: "#000000",
  image: "../images/combatant_purple_devil.png",
  particleDirection: "top"
}, shipObject_10 = {
  name: "red_devil",
  color: "#000000",
  image: "../images/combatant_red_devil.png",
  particleDirection: "top"
}, shipObject_11 = {
  name: "black_devil",
  color: "#000000",
  image: "../images/combatant_black_devil.png",
  particleDirection: "top"
}, shipObject_12 = {
  name: "blue_devil",
  color: "#000000",
  image: "../images/combatant_blue_devil.png",
  particleDirection: "top"
}, shipObject_13 = {
  name: "white_devil",
  color: "#000000",
  image: "../images/combatant_white_devil.png",
  particleDirection: "top"
}, shipObject_14 = {
  name: "green_devil",
  color: "#000000",
  image: "../images/combatant_green_devil.png",
  particleDirection: "top"
}, shipObject_15 = {
  name: "orange_devil",
  color: "#000000",
  image: "../images/combatant_orange_devil.png",
  particleDirection: "top"
}, shipObject_16 = {
  name: "silver_devil",
  color: "#000000",
  image: "../images/combatant_silver_devil.png",
  particleDirection: "top"
} ];

var lastIndex = 0;
var index;

function updateBackground(index) {
  //Pure Vanilla JS
  // document.querySelector("#particles-js").style.backgroundColor = shipsArray[index].color;
  $("#particles-js").animate({backgroundColor: shipsArray[index].color });
}

//Particle Direction Up or Down
function updateParticles(index) {
  var indicator = shipsArray[index].particleDirection;

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
    $(this).attr("src", shipsArray[index].image);
  });

  $("#ship-image").fadeIn("quick");
}

//Create Index for Ship Sprite
function createIndex() {
  var index = Math.floor(Math.random() * shipsArray.length);
  return index;
}

//Running Interval
var myVar = setInterval(function() {

    index = createIndex();

    if (index == lastIndex) {
      index = createIndex();
      // updateBackground(index);
      updateShip(index);
    } else {
      // updateBackground(index);
      updateShip(index);
    }

}, 5000);
