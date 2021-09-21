import Player from "./player";
import Camera from "./camera";

export const player = new Player(100, 100, 50, 50);
export const camera = new Camera(player);
window.camera = camera;
window.player = player;
