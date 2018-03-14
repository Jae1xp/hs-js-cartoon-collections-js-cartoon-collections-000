var dwarfNames = ["Doc", "Dopey", "Bashful", "Grumpy"];

function dwarfRollCall(dwarves) {
	var newStr = "";
	for(var i = 0; i < dwarves.length; i++) {
		if(i === dwarves.length) {
			newStr += (i + 1 + ". " + dwarves[i]);
		} else {
			newStr += (i + 1 + ". " + dwarves[i] + " ");
		}
	}
	return newStr;
}


var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];
function summonCaptainPlanet (calls) {
  for (var i = 0; i < calls.length; i++) {
    calls[i] = calls[i].toUpperCase() + "!";
  }
  console.log(calls);
  return calls
}


var shortWords = ["wind", "fire"];
var longWords = ["earth", "water", "heart"];
function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      return true;
    } else {
      return false;
    }
  }
}


var	snacks = ["crackers", "gouda", "thyme"];

var soup = ["tomato soup", "oyster crackers"];

var cheeses = ["gouda", "cheddar", "camembert"];

  function findTheCheese (foods) {
    for (var i = 0; i < foods.length; i++) {
      if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert") {
        return foods[i];
      }
    }
    return "no cheese!";
  }
