class Player {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.movement = {
      up: false,
      down: false,
      left: false,
      right: false,
    };
  }

  draw(ctx, camera) {
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.rect(this.x - camera.x, this.y - camera.y, this.width, this.height);
    ctx.fill();
    ctx.closePath();
  }
}
export default Player;
