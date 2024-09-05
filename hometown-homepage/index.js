const body = document.body;
const darkModeBtn = document.querySelector("#dark_mode");
// const lightModeBtn = document.querySelector("#dark_mode");
console.log("darkMode ", darkModeBtn);

darkModeBtn.addEventListener("click", (event) => {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  document.querySelector("#about-me").style.backgroundColor = "black";
});

const lightModeBtn = document.createElement("button");
const heroSection = document.querySelector(".hero");
const titleSection = document.querySelector(".title");
lightModeBtn.setAttribute("id", "light_mode");
lightModeBtn.innerHTML = `<span class="material-symbols-outlined">
light_mode
</span>`;
// get hero section
heroSection.insertBefore(lightModeBtn, titleSection);

lightModeBtn.addEventListener("click", () => {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  document.querySelector("#about-me").style.backgroundColor = "white";
});

// create a div to wrap light mode and dark mode button
const wrapLightDarkModes = document.createElement("div");
wrapLightDarkModes.classList.add("modes_wrapper");
console.log("wrapLightDarkModes ", wrapLightDarkModes);
wrapLightDarkModes.append(lightModeBtn);
wrapLightDarkModes.appendChild(darkModeBtn);
heroSection.insertBefore(wrapLightDarkModes, titleSection);
