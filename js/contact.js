const inputN = document.querySelector("#inputI");
const inputS = document.querySelector("#inputII");
const inputM = document.querySelector("#inputIII");
const inputE = document.querySelector("#inputE");
const optional = document.querySelector(".optional");
const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// EMAIL CODE

inputE.addEventListener("input", function () {
  let valueE = inputE.value.trim();

  if (
    dateComparison > halloweenStartDate &&
    halloweenEndDate > dateComparison
  ) {
    if (valueE == "") {
      inputE.dataset.state = "enabled";
      optional.style.display = "none";
    }
    if (valueE != "") {
      optional.style.display = "none";
      if (valueE.match(emailFormat)) {
        inputE.dataset.state = "validHalloween";
      } else {
        inputE.dataset.state = "enabled";
      }
    }
  } else if (dateComparison > christmasStartDate && dateComparison < christmasEndDate) {
    if (valueE == "") {
      inputE.dataset.state = "enabled";
      optional.style.display = "none";
    }
    if (valueE != "") {
      optional.style.display = "none";
      if (valueE.match(emailFormat)) {
        inputE.dataset.state = "validChristmas";
      } else {
        inputE.dataset.state = "enabled";
      }
    }
  } else {
    if (valueE == "") {
      inputE.dataset.state = "enabled";
      optional.style.display = "none";
    }
    if (valueE != "") {
      optional.style.display = "none";
      if (valueE.match(emailFormat)) {
        inputE.dataset.state = "valid";
      } else {
        inputE.dataset.state = "enabled";
      }
    }
  }
});

inputE.onfocus = function () {
  let valueE = inputE.value.trim();

  if (
    dateComparison > halloweenStartDate &&
    halloweenEndDate > dateComparison
  ) {
    if (valueE != "") {
      inputE.dataset.state = "enabled";
      if (valueE.match(emailFormat)) {
        inputE.dataset.state = "validHalloween";
        return;
      }
    } else if (valueE == "") {
      inputE.dataset.state = "enabled";
      return;
    }
  } else if (dateComparison > christmasStartDate && dateComparison < christmasEndDate) {
    if (valueE != "") {
      inputE.dataset.state = "enabled";
      if (valueE.match(emailFormat)) {
        inputE.dataset.state = "validChristmas";
        return;
      }
    } else if (valueE == "") {
      inputE.dataset.state = "enabled";
      return;
    }
  } else {
    if (valueE != "") {
      inputE.dataset.state = "enabled";
      if (valueE.match(emailFormat)) {
        inputE.dataset.state = "valid";
        return;
      }
    } else if (valueE == "") {
      inputE.dataset.state = "enabled";
      return;
    }
  }
};

inputE.onblur = function () {
  let valueE = inputE.value.trim();
  if (valueE == "") {
    inputE.dataset.state = "optional";
    optional.style.display = "block";
    return;
  }
};

inputN.oninput = function () {
  let valueN = inputN.value.trim();
  if (
    dateComparison > halloweenStartDate &&
    halloweenEndDate > dateComparison
  ) {
    if (valueN != "") {
      inputN.dataset.state = "validHalloween";
      return true;
    } else {
      inputN.dataset.state = "enabled";
      return;
    }
  } else if (dateComparison > christmasStartDate && dateComparison < christmasEndDate) {
    if (valueN != "") {
      inputN.dataset.state = "validChristmas";
      return true;
    } else {
      inputN.dataset.state = "enabled";
      return;
    }
  } else {
    if (valueN != "") {
      inputN.dataset.state = "valid";
      return true;
    } else {
      inputN.dataset.state = "enabled";
      return;
    }
  }
};

inputN.onfocus = function () {
  let valueN = inputN.value.trim();
  if (
    dateComparison > halloweenStartDate &&
    halloweenEndDate > dateComparison
  ) {
    inputN.dataset.state = "enabled";
    if (valueN != "") {
      inputN.dataset.state = "validHalloween";
      return;
    }
  } else if (dateComparison > christmasStartDate && dateComparison < christmasEndDate) {
    inputN.dataset.state = "enabled";
    if (valueN != "") {
      inputN.dataset.state = "validChristmas";
      return;
    }
  } else {
    inputN.dataset.state = "enabled";
    if (valueN != "") {
      inputN.dataset.state = "valid";
      return;
    }
  }
};

inputN.onblur = function () {
  let valueN = inputN.value.trim();
  if (valueN == "") {
    inputN.dataset.state = "optional";
    return;
  }
};

inputS.oninput = function () {
  let valueS = inputS.value.trim();
  if (
    dateComparison > halloweenStartDate &&
    halloweenEndDate > dateComparison
  ) {
    if (valueS != "") {
      inputS.dataset.state = "validHalloween";
      return true;
    } else {
      inputS.dataset.state = "enabled";
      return;
    }
  } else if (dateComparison > christmasStartDate && dateComparison < christmasEndDate) {
    if (valueS != "") {
      inputS.dataset.state = "validChristmas";
      return true;
    } else {
      inputS.dataset.state = "enabled";
      return;
    }
  } else {
    if (valueS != "") {
      inputS.dataset.state = "valid";
      return true;
    } else {
      inputS.dataset.state = "enabled";
      return;
    }
  }
};

inputS.onfocus = function () {
  let valueS = inputS.value.trim();
  if (
    dateComparison > halloweenStartDate &&
    halloweenEndDate > dateComparison
  ) {
    inputS.dataset.state = "enabled";
    if (valueS != "") {
      inputS.dataset.state = "validHalloween";
      return;
    }
  } else if (dateComparison > christmasStartDate && dateComparison < christmasEndDate) {
    inputS.dataset.state = "enabled";
    if (valueS != "") {
      inputS.dataset.state = "validChristmas";
      return;
    }
  } else {
    inputS.dataset.state = "enabled";
    if (valueS != "") {
      inputS.dataset.state = "valid";
      return;
    }
  }
};

inputS.onblur = function () {
  let valueS = inputS.value.trim();
  if (valueS == "") {
    inputS.dataset.state = "optional";
    return;
  }
};

inputM.oninput = function () {
  let valueM = inputM.value.trim();
  if (
    dateComparison > halloweenStartDate &&
    halloweenEndDate > dateComparison
  ) {
    if (valueM != "") {
      inputM.dataset.state = "validHalloween";
      return true;
    } else {
      inputM.dataset.state = "enabled";
      return;
    }
  } else if (dateComparison > christmasStartDate && dateComparison < christmasEndDate) {
    if (valueM != "") {
      inputM.dataset.state = "validChristmas";
      return true;
    } else {
      inputM.dataset.state = "enabled";
      return;
    }
  } else {
    if (valueM != "") {
      inputM.dataset.state = "valid";
      return true;
    } else {
      inputM.dataset.state = "enabled";
      return;
    }
  }
};

inputM.onfocus = function () {
  let valueM = inputM.value.trim();
  if (
    dateComparison > halloweenStartDate &&
    halloweenEndDate > dateComparison
  ) {
    inputM.dataset.state = "enabled";
    if (valueM != "") {
      inputM.dataset.state = "validHalloween";
      return;
    }
  } else if (dateComparison > christmasStartDate && dateComparison < christmasEndDate) {
    inputM.dataset.state = "enabled";
    if (valueM != "") {
      inputM.dataset.state = "validChristmas";
      return;
    }
  } else {
    inputM.dataset.state = "enabled";
    if (valueM != "") {
      inputM.dataset.state = "valid";
      return;
    }
  }
};

inputM.onblur = function () {
  let valueM = inputM.value.trim();
  if (valueM == "") {
    inputM.dataset.state = "optional";
    return;
  }
};

function formFunction() {
  valueN = inputN.value.trim();
  valueE = inputE.value.trim();
  valueS = inputS.value.trim();
  valueM = inputM.value.trim();
  if (valueN == "") {
    inputN.dataset.state = "invalid";
  }
  if (valueE != "") {
    if (valueE.match(emailFormat)) {
      inputE.dataset.state = "valid";
    } else {
      inputE.dataset.state = "in-range";
    }
  }
  if (valueS == "") {
    inputS.dataset.state = "invalid";
  }
  if (valueM == "") {
    inputM.dataset.state = "invalid";
  }
  if (
    inputN.dataset.state == "invalid" ||
    inputE.dataset.state == "in-range" ||
    inputS.dataset.state == "invalid" ||
    inputM.dataset.state == "invalid"
  ) {
    return false;
  } else {
    return true;
  }
}

const queryString = window.location.search;
if (queryString == "?mailsent=confirmed") {
  document.querySelector("#formSuccess").style.display = "block";
  history.replaceState({}, null, "/contact/");
} else if (queryString == "?mailsent=error") {
  document.querySelector("#formError").style.display = "block";
  history.replaceState({}, null, "/contact/");
}
