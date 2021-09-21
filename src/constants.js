let _id = 0;
export const key = () => _id++;

export const ASPECT_RATIO = 4 / 3;
export const DEFAULT_FRAME_WIDTH = 667;
export const DEFAULT_FRAME_HEIGHT = DEFAULT_FRAME_WIDTH / ASPECT_RATIO;
export const FRAME_DURATION = 10;

export const CAMERA_FOLLOW_PLAYER = key();
export const CAMERA_STILL = key();
export const CAMERA_PANE = key();
