// Creating a Date

const dateComparison = new Date();
const halloweenStartDate = new Date("10/20");
const halloweenEndDate = new Date("11/3");
const christmasStartDate = new Date("12/1");
const christmasEndDate = new Date("1/5");

// Checking Page Location

if (window.location.pathname == "/") {
  if (
    dateComparison > halloweenStartDate &&
    halloweenEndDate > dateComparison
  ) {
    // Halloween Content
    document.getElementById("VectorIsland").src = "/images/Island Spook.svg";
    document.getElementById("VectorCelestial").src = "/images/Moon.svg";
    document.getElementById("VectorCloudFirst").src =
      "/images/Clouds First Layer Spook.svg";
    document.getElementById("VectorCloudSecond").src =
      "/images/Clouds Second Layer Spook.svg";
    document.getElementById("VectorDrips").src = "/images/Lava Drips Frame.svg";
    document.querySelector(".background-fix").style.backgroundImage =
      "linear-gradient(220deg, #1a192c, #eee)";
    document.querySelector(".logo-lift-two").style.backgroundColor = "#25233d";
  } else if (dateComparison > christmasStartDate || dateComparison < christmasEndDate) {
    // Christmas Content
    document.getElementById("VectorIsland").src = "/images/Snow Island.svg";
    document.getElementById("VectorCelestial").src = "/images/Moon.svg";
    document.getElementById("VectorDrips").src = "/images/Snow Drips Frame.svg";
    document.querySelector(".background-fix").style.backgroundImage =
      "linear-gradient(220deg, #6FC9FF, #eee)";
    document.querySelector(".logo-lift-two").style.backgroundColor = "#2C8DE8";
  }
}

if (window.location.pathname == "/about/") {
  if (
    dateComparison > halloweenStartDate &&
    halloweenEndDate > dateComparison
  ) {
    // Halloween Content
    document.querySelector(".under-skew").style.backgroundColor = "#4c4789";
    document.querySelector(".profile-pic").src =
      "/images/portraitclosehalloween.jpg";
    document.querySelector(".grid-column-two").style.backgroundImage =
      "url(/images/sbhalloween.svg)";
    document.querySelector(".tech-image").src = "/images/techhalloween.svg";
    document.querySelector("footer").style.backgroundColor = "#857aff";
  } else if (dateComparison > christmasStartDate || dateComparison < christmasEndDate) {
    // Christmas Content
    document.querySelector(".under-skew").style.backgroundColor = "#2C8DE8";
    document.querySelector(".profile-pic").src =
      "/images/portraitclosechristmas.jpg";
    document.querySelector(".grid-column-two").style.backgroundImage =
      "url(/images/sbchristmas.svg)";
    document.querySelector(".tech-image").src = "/images/techchristmas.svg";
    document.querySelector("footer").style.backgroundColor = "#6FC9FF";
  }
}

if (
  window.location.pathname == "/about/web-design/" ||
  window.location.pathname == "/about/front-end/" ||
  window.location.pathname == "/about/game-dev/"
) {
  if (
    dateComparison > halloweenStartDate &&
    halloweenEndDate > dateComparison
  ) {
    // Halloween Content
    document.querySelector("body").style.backgroundColor = "#4c478999";
  } else if (dateComparison > christmasStartDate || dateComparison < christmasEndDate) {
    // Christmas Content
    document.querySelector("body").style.backgroundColor = "#2C8DE899";
  }
}

if (window.location.pathname == "/contact/") {
  if (
    dateComparison > halloweenStartDate &&
    halloweenEndDate > dateComparison
  ) {
    // Halloween Content
    document.querySelector(".under-skew").style.backgroundColor = "#4c4789";
    document.querySelector("h1.black").innerText = "Hey There! 🦇";
  } else if (dateComparison > christmasStartDate || dateComparison < christmasEndDate) {
    // Christmas Content
    document.querySelector(".under-skew").style.backgroundColor = "#2C8DE8";
    document.querySelector("h1.black").innerText = "Hey There! ☃️";
  }
}

if (window.location.pathname == "/portfolio/") {
  let css;
  let style = document.createElement("style");
  if (
    dateComparison > halloweenStartDate &&
    halloweenEndDate > dateComparison
  ) {
    // Halloween Content
    document.querySelector(".under-skew").style.backgroundColor = "#4c4789";
    if(typeof(document.querySelector(".p-create")) != 'undefined' && document.querySelector(".p-create") != null){
     document.querySelector(".p-create").style.backgroundImage =
      "url(/images/create-h.svg)";
    }
    if(typeof(document.querySelector(".p-create-two")) != 'undefined' && document.querySelector(".p-create-two") != null){
      document.querySelector(".p-create-two").style.backgroundImage =
      "url(/images/create-h.svg)";
     }
    
  } else if (dateComparison > christmasStartDate || dateComparison < christmasEndDate) {
    document.querySelector(".under-skew").style.backgroundColor = "#2C8DE8";
    if(typeof(document.querySelector(".p-create")) != 'undefined' && document.querySelector(".p-create") != null){
      document.querySelector(".p-create").style.backgroundImage =
      "url(/images/create-w.svg)";
    }
    if(typeof(document.querySelector(".p-create-two")) != 'undefined' && document.querySelector(".p-create-two") != null){
      document.querySelector(".p-create-two").style.backgroundImage =
      "url(/images/create-w.svg)";
    } 
  }
}

if (dateComparison > halloweenStartDate && halloweenEndDate > dateComparison) {
  // Halloween Content
  console.log("Happy Halloween");
  document.querySelector("h1 .green").style.color = "#4c4789";
  document.querySelector(".green").style.color = "#857aff";
} else if (dateComparison > christmasStartDate || dateComparison < christmasEndDate) {
  // Christmas Content
  console.log("Merry Christler!");
  document.querySelector(".green").style.color = "#2C8DE8";
  document.querySelector("h1 .green").style.color = "#2C8DE8";
} else {
  console.log("\n \nWelcome to the Creeper Buddy Website! 👋 \nThanks for checking around and seeing how \nI do things as a developer and designer. If \nyou are a developer/designer yourself and \nwant to work on a collaborative project \ntogether, then don't hesitate to contact me \nhere: \n \n https://creeperbuddy.design/contact/ \n \nCheers! 💡 \n \n");
}
