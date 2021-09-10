import printMe from './print.js';
import "./style.scss";

const hello = name => {
    console.log(`hello ${name}`)
}
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    element.innerHTML = ['Hello', 'webpack'].join(" ");
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = () => {
        printMe();
        hello("juki");
    };

    element.appendChild(btn);
    return element;
  }
  
  document.body.appendChild(component());