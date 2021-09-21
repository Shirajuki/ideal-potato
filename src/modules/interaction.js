import { player } from "../state";

const keyDownHandler = (event) => {
  switch (event.key) {
    case "ArrowLeft":
      player.movement.left = true;
      break;
    case "ArrowUp":
      player.movement.up = true;
      break;
    case "ArrowRight":
      player.movement.right = true;
      break;
    case "ArrowDown":
      player.movement.down = true;
      break;
    default:
      break;
  }
};
const keyUpHandler = (event) => {
  switch (event.key) {
    case "ArrowLeft":
      player.movement.left = false;
      break;
    case "ArrowUp":
      player.movement.up = false;
      break;
    case "ArrowRight":
      player.movement.right = false;
      break;
    case "ArrowDown":
      player.movement.down = false;
      break;
    default:
      break;
  }
};
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

export default {};
