const link = document.getElementById("back-link");
link.setAttribute("href", document.referrer);

link.onclick = function () {
  history.back();
  return false;
};
