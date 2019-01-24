// put code here!
let hungry = prompt("On a scale from 1 to 10, how hungry are you?");
console.log(hungry);

if (parseInt(hungry) <= 5) {
  alert("You are not hungry, we don't need to find a place to eat.");
} else if (parseInt(hungry) < 8) {
  alert(
    "Ok, you are mildly hungry. Let's pick a place to eat for later tonight."
  );
} else {
  alert(
    "You are famished! Let's pick a place to eat and run there A$AP Rocky."
  );
}
if (parseInt(hungry) > 5) {
  let spicy = prompt("Do you want Spicy foods? (Y/N)");
  if (spicy === "Y") {
    let spicyType = prompt(
      "I'm thinking spicy like Mexican, Chinese, or Korean. Any of those sound good? (M/C/K/No)"
    );
    if (spicyType === "M") {
      let chipotle = confirm("Does Chipotle sound delicious or what!?");
      if (chipotle === true) {
        alert("Great let's go and we'll be sure to get extra guac.");
      } else {
        alert(
          "Ok, let's go to Tquieria Gramercy https://www.yelp.com/biz/taqueria-gramercy-new-york?osq=mexican+spicy"
        );
      }
    } else if (spicyType === "K") {
      alert(
        "Great, let's go to Gogi Grill (https://www.yelp.com/biz/gogi-grill-chelsea-new-york-2?osq=korean+spicy)."
      );
    } else if (spicyType === "C") {
      alert(
        "Great, let's go to Xi'an Famous Foods (https://www.yelp.com/biz/xian-famous-foods-new-york-35?osq=chinese+spicy)."
      );
    }
  } else {
    let savorType = prompt(
      "So no spicy foods then. Ok, do you feel like Italian, Americana, or French? (I/A/F)"
    );
    if (savorType === "I") {
      let thrifty = prompt(
        "Italian around here is pricy. How much are you willing to spend?"
      );
      if (parseInt(thrifty) <= 10) {
        alert("Yeah, I'm in for fast casual, too. Let's go to ...");
      }
      if (parseInt(thrifty) > 10) {
        alert("This might be a stretch, but I'm thinking ...");
      }
    } else if (savorType === "A") {
      let barB = prompt("Do you like barbeque? (Y/N)");
      switch (barB) {
        case "Y":
          alert("Yay! Let's go to Blue Smoke, I've heard it's tasty.");
          break;
        default:
          let pressure = confirm(
            "But ribs are the BEST...can we go to bbq PRETTY PRETTY PLEASE!?!?!?!"
          );
          if (pressure === true) {
            alert("Yay! Let's go to Blue Smoke, I've heard it's tasty.");
          } else {
            alert("Ok, fine. Let's go to Chop't.");
          }
      }
    } else {
      alert(
        "French sounds great to me too! Let's go to L'Express https://www.yelp.com/biz/l-express-new-york-3?osq=french"
      );
    }
  }
  let sweet = prompt("Are you feeling like dessert? (Y/N)");
  if (sweet === "Y") {
    let froYo = confirm(
      "Happiness = froyo #amiright. Let's get some of that frozen yogurt in our bellies."
    );
    if (froYo === true) {
      alert(
        "Perfect, let's be best friends and go to 16 Handles https://www.yelp.com/biz/16-handles-new-york-12?osq=fro"
      );
    } else {
      alert("Ok, well this is weird but I only want froyo. Seeya later.");
    }
  } else {
    alert("Ok, well this is weird but I only want froyo. Seeya later.");
  }
}
