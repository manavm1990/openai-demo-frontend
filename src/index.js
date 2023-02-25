import initBg from './bg';
import initSelectListener from './selectListener';

initBg();
initSelectListener((val) => {
  console.log(val);
});