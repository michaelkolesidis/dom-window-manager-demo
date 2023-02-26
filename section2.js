// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import "./style.scss";
import { WindowManager, dragElement } from "dom-window-manager";

let windowManager = new WindowManager();

const element = document.createElement("div");
element.classList.add("window");
element.setAttribute("id", "two");
element.style.position = "absolute";
element.innerHTML = /* html */ `This is a window created in another .js file`;
document.body.appendChild(element);

// Modal X Button
const removeButton = document.createElement("button");
removeButton.classList.add("remove-button");
removeButton.textContent = "✕";
removeButton.addEventListener("click", () => {
  document.body.removeChild(element);
});
element.appendChild(removeButton);

dragElement(element);
element.style.zIndex = windowManager.base;
element.addEventListener("mousedown", () => {
  element.style.zIndex = windowManager.moveOnTop();
});

const logo = document.createElement("div");
logo.classList.add("window");
logo.setAttribute("id", "three");
logo.style.position = "absolute";
logo.innerHTML = /* html */ `<img src="./dwm-logo.png" />`;
document.body.appendChild(logo);

dragElement(logo);
logo.style.zIndex = windowManager.base;
logo.addEventListener("mousedown", () => {
  logo.style.zIndex = windowManager.moveOnTop();
});
