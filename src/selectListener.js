const select = document.querySelector('select');

export default (fn) => {
  select.addEventListener('change', (e) => {
    fn(e.target.value);
  });
}