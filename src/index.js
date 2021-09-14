import printMe from "./print";
import "./style.scss";

const component = () => {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = ["Hello", "webpack"].join(" ");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = () => {
    printMe();
  };

  element.appendChild(btn);
  return element;
};

document.body.appendChild(component());
