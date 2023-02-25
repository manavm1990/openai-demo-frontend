import initBg from './bg';
import initSelectListener from './selectListener';

initBg();
initSelectListener((val) => {
  fetch("http://localhost:3000/val").then((res) => {
    // TODO: handle response by putting it in the DOM
    console.log("res", res);
  });
});