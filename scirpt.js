const oblast = document.getElementById("oblast");
const btnList = document.getElementsByClassName("btn");

let currentShape = null;

btnList[1].addEventListener("click", function () {
  //console.log(oblast);
  const shapeSquare = document.createElement("div");
  shapeSquare.setAttribute("class", "square");
  oblast.innerHTML = "";
  oblast.append(shapeSquare);
  currentShape = shapeSquare;
});

btnList[0].addEventListener("click", function () {
  const shapeCircle = document.createElement("div");
  shapeCircle.setAttribute("class", "circle");
  oblast.innerHTML = "";
  oblast.append(shapeCircle);
  currentShape = shapeCircle;
});

const colors = [
  {
    title: "Красный",
    hex: "#E32636",
  },
  {
    title: "Желтый",
    hex: "#FDE910",
  },
  {
    title: "Зеленый",
    hex: "#138808",
  },
  {
    title: "Синий",
    hex: "#1560BD",
  },
];

let currentIndex = 0;
const toggleBtn = document.getElementById("toggleColor");
const clearBtn = document.getElementById("clearColor");

toggleBtn.addEventListener("click", function () {
  if (!currentShape) {
    alert("Выберите фигуру!");
    return;
  }

  const currentColor = colors[currentIndex];
  currentShape.style.backgroundColor = currentColor.hex;
  currentIndex = (currentIndex + 1) % colors.length;
});

clearBtn.addEventListener("click", function () {
  if (currentShape) {
    currentShape.style.backgroundColor = "";
  }

  currentIndex = 0;
});
