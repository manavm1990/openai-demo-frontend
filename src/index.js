import initBg from './bg';
import renderers from "./renderers.js";
import initSelectListener from './selectListener';

const errorP = document.querySelector("p")
const ol = document.querySelector("ol")

initBg();
initSelectListener((val) => {
  fetch("http://localhost:3000/val").then((data) => {
    renderers.renderList(data, ol)
  }).catch(err => {
    renderers.renderError(err, errorP)
  })
});