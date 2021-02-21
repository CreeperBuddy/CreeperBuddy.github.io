const transElement = document.querySelector(".transition");

window.onload = function () {
  transElement.style.bottom = "auto";
  transElement.style.top = "0";
  transElement.style.height = "0";
};

let links = document.querySelectorAll("a.website");

Array.from(links).forEach(function (link) {
  link.addEventListener("mouseover", function () {
    fetch(link.href, { cache: "force-cache" });
  });
});

if (links) {
  links.forEach(function (link) {
    link.onclick = function (e) {
      e.preventDefault();

      setTimeout(function () {
        if (TransCheck == true) {
          console.log("CONFIRMED: transition element is functioning!");
          if (!e.target.parentElement.href) {
            window.location = e.target.href;
          } else {
            window.location = e.target.parentElement.href;
          }
        } else {
          console.log("ERROR! Unable to perform transition.");
        }
      }, 300);
      transElement.style.top = "auto";
      transElement.style.bottom = "0";
      transElement.style.height = "100vh";
      let TransCheck = true;
    };
  });
}
