import {
  DEFAULT_FRAME_WIDTH,
  DEFAULT_FRAME_HEIGHT,
  // CAMERA_FOLLOW_PLAYER,
  // CAMERA_PANE,
  // CAMERA_STILL,
} from "./constants";
import { player, camera } from "./state";

class Game {
  constructor(ctx) {
    this.width = DEFAULT_FRAME_WIDTH;
    this.height = DEFAULT_FRAME_HEIGHT;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    // Movement
    if (player.movement.up) player.y--;
    if (player.movement.down) player.y++;
    if (player.movement.left) player.x--;
    if (player.movement.right) player.x++;

    // Camera view
    camera.loop();
    player.draw(this.ctx, camera);
    // player.draw(this.ctx);
    this.ctx.fillText(`${player.x}, ${player.y}`, 10, 50);
    window.requestAnimationFrame(() => this.draw());
  }
}
export default Game;
