const root = document.documentElement;
const btn = document.getElementById("theme");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

// Какая тема сейчас: выбранная вручную или системная
function currentTheme() {
    return root.dataset.theme || (systemDark.matches ? "dark" : "light");
}

// Применить тему и поменять значок
function applyTheme(theme) {
    root.dataset.theme = theme;
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
}

// При загрузке берём сохранённый выбор, если он есть
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
applyTheme(saved || currentTheme());

// Клик по кнопке переключает тему и запоминает выбор
btn.addEventListener("click", function () {
    const next = currentTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
});