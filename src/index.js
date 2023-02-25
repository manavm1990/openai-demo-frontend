import initBg from "./bg";
import renderers from "./renderers.js";
import initSelectListener from "./selectListener";

const bg = document.querySelector("#bg");
const errorP = document.querySelector("p");
const ol = document.querySelector("ol");

initBg();
initSelectListener((val) => {
  renderers.renderError(errorP, "");

  bg.classList.add("animate-pulse");

  fetch("http://localhost:3000/val")
    .then((res) => res.json())
    .then((data) => {
      console.log("done fetching");
      renderers.renderList(ol, data.completion.split(", "));
    })
    .catch((err) => {
      renderers.renderError(errorP, err);
    }).finally(() => {
      bg.classList.remove("animate-pulse");
    });
});
