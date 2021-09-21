import { CAMERA_FOLLOW_PLAYER } from "./constants";

class Camera {
  constructor(player) {
    this.player = player;
    this.cameraType = CAMERA_FOLLOW_PLAYER;
    this.x = 0;
    this.y = 0;
    this.transitionX = 0;
    this.transitionY = 0;
    this.transitionSpeed = 5;
  }

  loop() {
    this.x += parseInt(
      ((this.player.x - this.x - this.transitionX - 200) / 20) * 1,
      10
    );
    this.y += parseInt(
      ((this.player.y - this.y - this.transitionY - 200) / 20) * 1,
      10
    );
    if (this.player.movement.left && this.transitionX > -200) {
      this.transitionX -= this.transitionSpeed;
    } else if (this.player.movement.right && this.transitionX < 400) {
      this.transitionX += this.transitionSpeed;
    }
    if (this.player.movement.up && this.transitionY > -200) {
      this.transitionY -= this.transitionSpeed;
    } else if (this.player.movement.down && this.transitionY < 250) {
      this.transitionY += this.transitionSpeed;
    }
  }
}
export default Camera;
