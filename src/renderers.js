export default {
  renderList(parent, data) {
    parent.innerHTML = data.map((item) => `<li>${item}</li>`).join("\n");
  },

  renderError(parent, msg = "🥅 Some Other Error") {
    parent.innerText = msg
  }
}

