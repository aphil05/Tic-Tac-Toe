let darkmode = localStorage.getItem('dark-mode');
const themeButton = document.getElementById('theme-button');

const enableDarkmode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('dark-mode', 'active');
}

const disableDarkemode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('dark-mode', null);
}
if (darkmode === 'active') enableDarkmode();


themeButton.addEventListener("click", () => {
  darkmode = localStorage.getItem('dark-mode');
  if (darkmode !== "active") {
    enableDarkmode()
  } else {
    disableDarkemode()
  }
})