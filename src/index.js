import initBg from "./bg";
import renderers from "./renderers.js";
import initSelectListener from "./selectListener";

const errorP = document.querySelector("p");
const ol = document.querySelector("ol");

initBg();
initSelectListener((val) => {
  renderers.renderError(errorP, "");

  fetch("http://localhost:3000/val")
    .then((res) => res.json())
    .then((data) => {
      renderers.renderList(ol, data.completion.split(", "));
    })
    .catch((err) => {
      renderers.renderError(errorP, err);
    });
});
