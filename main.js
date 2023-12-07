const grey = document.querySelector("#grey");
const white = document.querySelector("#white");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");

function colorChanger(color) {
  color.addEventListener("click", function (e) {
    console.log();
    document.querySelector("body").style.backgroundColor = `${e.target.id}`;
  });
}

colorChanger(grey);
colorChanger(white);
colorChanger(blue);
colorChanger(yellow);
