const queryString = window.location.search;
if (queryString == "?polk") {
  document.querySelector("#notifyPolkUser").style.display = "flex";
  document.querySelector("main").style.overflow = "hidden";
  history.replaceState({}, null, "/");
}  

document.querySelector("#polkContinue").onclick = function () {
  document.querySelector("#notifyPolkUser").style.height = "0";
  document.querySelector("#notifyPolkUser").style.padding = "0";
  document.querySelector("#notifyPolkUser h1").style.opacity = "0";
  document.querySelector("#notifyPolkUser p").style.opacity = "0";
  document.querySelector("#notifyPolkUser ul").style.opacity = "0";
  document.querySelector("#notifyPolkUser button").style.opacity = "0";
  document.querySelector("#notifyPolkUser").style.pointerEvents = "none";
}

  