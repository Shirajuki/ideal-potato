// import printMe from "./print";
import Game from "./game";
import "./style.scss";
import "./modules";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const game = new Game(ctx);
// Set canvas size
const { innerWidth: vw, innerHeight: vh } = window;
canvas.style.width = Math.floor(vh / 3);
canvas.style.height = Math.floor(vw / 3);
canvas.width = Math.floor(game.width);
canvas.height = Math.floor(game.height);

window.game = game;
window.requestAnimationFrame(() => game.draw());
