javascript:(()=>{"use strict";let godot = ["Godot", "Godont", "godont", "godon't", "Godon't", "godot", "Godoh", "godoh"];async function getThread() {let l = window.location.href;l = l.split("#")[0];const link = `${l}.json`;return await fetch(link).then(async (res) => {const t = await res.json();return t;});}function getGodotInReply(thread) {const resp = [];thread.posts.forEach((r) => {godot.forEach((g) => {if (r.com.includes(g)) {resp.push(`>>${r.no}`);}});});return resp.join(' ');}getThread().then((t) => {const quotes = getGodotInReply(t);const qrForm = document.querySelector("#qrForm");const textArea = qrForm?.querySelector('textarea');if (textArea) {textArea.value = quotes + "\nGodot 4.0 will fix that.";}else {alert("You need an open quick reply form.");}});})();