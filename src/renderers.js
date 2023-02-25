export default {
  renderList(data, parent) {
    parent.innerHTML = data.map((item) => `<li>${item}</li>`).join();
  },
  renderError(msg, parent) {
    parent.innerText = msg
  }
}

