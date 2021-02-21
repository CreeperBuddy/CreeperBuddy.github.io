const button = document.querySelector("#burger-button");
const bLineOne = document.querySelector("#b-one");
const bLineTwo = document.querySelector("#b-two");
const bLineThree = document.querySelector("#b-three");
const content = document.querySelector("#burger-container");
const contentLinkOne = document.getElementById("burger-link-one");
const contentLinkTwo = document.getElementById("burger-link-two");
const contentLinkThree = document.getElementById("burger-link-three");
const contentLinkFour = document.getElementById("burger-link-four");
const pageScroll = document.getElementsByClassName("html-hamburger")[0];
let check = false;

button.onclick = function () {
  if (check == true) {
    bLineOne.style.transform = "rotate(0)";
    bLineOne.style.top = "0";
    bLineThree.style.transform = "rotate(0)";
    bLineThree.style.top = "inherit";
    bLineThree.style.bottom = "0";
    bLineTwo.style.transform = "translate(0)";
    bLineTwo.style.opacity = "1";
    // Content
    content.style.height = "0";
    content.style.transitionDelay = "100ms";
    contentLinkOne.style.transitionDelay = "";
    contentLinkTwo.style.transitionDelay = "";
    contentLinkThree.style.transitionDelay = "";
    contentLinkFour.style.transitionDelay = "";
    contentLinkOne.style.transform = "translateY(-25px)";
    contentLinkOne.style.opacity = "0";
    contentLinkTwo.style.transform = "translateY(-25px)";
    contentLinkTwo.style.opacity = "0";
    contentLinkThree.style.transform = "translateY(-25px)";
    contentLinkThree.style.opacity = "0";
    contentLinkFour.style.transform = "translateY(-25px)";
    contentLinkFour.style.opacity = "0";
    pageScroll.style.overflow = "auto";
    check = false;
  } else {
    bLineOne.style.transform = "rotate(45deg)";
    bLineOne.style.top = "11px";
    bLineThree.style.transform = "rotate(-45deg)";
    bLineThree.style.top = "11px";
    bLineTwo.style.transform = "translate(-75px)";
    bLineTwo.style.opacity = "0";
    // Content
    content.style.height = "100%";
    content.style.transitionDelay = "";
    contentLinkOne.style.transitionDelay = "250ms";
    contentLinkTwo.style.transitionDelay = "350ms";
    contentLinkThree.style.transitionDelay = "450ms";
    contentLinkFour.style.transitionDelay = "550ms";
    contentLinkOne.style.transform = "translateY(0)";
    contentLinkOne.style.opacity = "1";
    contentLinkTwo.style.transform = "translateY(0)";
    contentLinkTwo.style.opacity = "1";
    contentLinkThree.style.transform = "translateY(0)";
    contentLinkThree.style.opacity = "1";
    contentLinkFour.style.transform = "translateY(0)";
    contentLinkFour.style.opacity = "1";
    pageScroll.style.overflow = "hidden";
    check = true;
  }
};
