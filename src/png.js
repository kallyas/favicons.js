import Canvas from "./canvas";
/**
 *
 *
 * @export
 * @class Png
 */
export default class Png {
  constrcutor(canvas) {
    this.canvas = canvas;
  }
/**
 *
 *
 * @param {*} size
 * @returns
 * @memberof Png
 */
generate(size) {
    var resizedCanvas = Canvas.resizeCanvasOptimal(canvas, size, size);
    return resizedCanvas.toDataURL();
  }
}