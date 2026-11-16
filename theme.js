// Applies the saved theme before paint and adds a theme picker to the nav.
(function () {
  var themes = [["light", "Light"], ["dark", "Dark"], ["contrast", "High contrast"], ["forest", "Forest"]];
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  var ok = themes.some(function (t) { return t[0] === saved; });
  var more = window.matchMedia && matchMedia("(prefers-contrast: more)").matches;
  var theme = ok ? saved : (more ? "contrast" : "light");
  document.documentElement.setAttribute("data-theme", theme);
  document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector("nav");
    if (!nav) return;
    var label = document.createElement("label");
    label.className = "theme-pick";
    label.appendChild(document.createTextNode("Theme "));
    var sel = document.createElement("select");
    themes.forEach(function (t) {
      var o = document.createElement("option");
      o.value = t[0]; o.textContent = t[1]; sel.appendChild(o);
    });
    sel.value = theme;
    sel.addEventListener("change", function () {
      document.documentElement.setAttribute("data-theme", sel.value);
      try { localStorage.setItem("theme", sel.value); } catch (e) {}
    });
    label.appendChild(sel);
    nav.appendChild(label);
  });
})();
