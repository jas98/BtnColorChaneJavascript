var allBtnAry = document.getElementsByTagName("button");
console.log(allBtnAry);
var  secondBtnAry = [];
for (var i = 0; i < allBtnAry.length; i++) {
  secondBtnAry.push(allBtnAry[i]);

  // secondBtnAry[i] = allBtnAry[i];
  console.log(secondBtnAry[0].classList[1]);
}

function execute(color) {
  if (color.value == "red") {
    redF();
  } else if (color.value === "green") {
    greenF();
  } else if (color.value == "random") {
    randonF();
  } else if (color.value == "reset") {
    resetF();
  }
}

function redF() {
  for (var i = 0; i < allBtnAry.length; i++) {
    allBtnAry[i].classList.remove(allBtnAry[i].classList[1]);

    allBtnAry[i].classList.add("btn-danger");
  }
  console.log(secondBtnAry[0].classList[1]);
}

function greenF() {
  for (var i = 0; i < allBtnAry.length; i++) {
    allBtnAry[i].classList.remove(allBtnAry[i].classList[1]);
    allBtnAry[i].classList.add("btn-success");
  }
  console.log(secondBtnAry[0].classList[1]);
}

function randonF() {
  var colors = ["btn-primary", "btn-danger", "btn-default", "btn -success"];

  for (var i = 0; i < allBtnAry.length; i++) {
    //  var random = Math.floor(Math.random() * 3 + 0);
    allBtnAry[i].classList.remove(allBtnAry[i].classList[1]);
    allBtnAry[i].classList.add(colors[Math.floor(Math.random() * 3 + 0)]);
  }
  console.log(secondBtnAry[0].classList[1]);
}

function resetF() {
  for (var i = 0; i < allBtnAry.length; i++) {
    allBtnAry[i].classList.remove(allBtnAry[i].classList[1]);

    allBtnAry[i].classList.add(secondBtnAry[i].classList[1]);
  }
  console.log(secondBtnAry[0].classList[1]);
}
