import shuffle from "lodash.shuffle";

const bg =  "🐶 🐱 🐦 🐴 🐍 🐹 🦜 🕷️ 🐟 🐠 🐡 🐬 🐳 🐋 🐊 🐆 🐅 🐃 🐂 🐄 🐪 🐫 🐘 🐐 🐏 🐑 🐎 🐖 🐀 🐁 🐓 🦃 🕊️ 🐕 🐩 🐈 🐈‍⬛ 🐇 🐿️ 🦔 🦇 🐻 🐨 🐼 🐾 🦁 🐯 🐮 🐷 🐗 🐽 🐸 🐊 🐢 🦎 🐍 🦕 🦖 🐙 🦑 🦐 🦀 🐠 🐟 🐡 🐬 🦈 🐳 🐋 🐊 🐆 🐅 🐃 🐂 🐄 🐪 🐫 🐘 🐐 🐏 🐑 🐎 🐖 🐀 🐁 🐓 🦃 🕊️ 🐕 🐩 🐈 🐈‍⬛ 🐇 🐿️ 🦔 🦇 🐻 🐨 🐼 🐾 🦁 🐯 🐮 🐷 🐗 🐽 🐸 🐊 🐢 🦎 🐍 🦕 🦖 🐙 🦑 🦐 🦀 🐠 🐟 🐡 🐬 🦈 🐳 🐋 🐊 🐆 🐅 🐃 🐂 🐄 🐪 🐫 🐘 🐐 🐏 🐑 🐎 🐖 🐀 🐁 🐓 🦃 🕊️ 🐕 🐩 🐈 🐈‍⬛ 🐇 🐿️ 🦔 🦇 🐻 🐨 🐼 🐾 🦁 🐯 🐮 🐷 🐗 🐽 🐸 🐊 🐢 🦎 🐍 🦕"

export default () => {
const bgDiv = document.getElementById('bg');
bgDiv.setAttribute('before', shuffle(bg.split(" ")).join(" "));
}