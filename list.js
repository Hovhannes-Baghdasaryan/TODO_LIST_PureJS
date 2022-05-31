const form = document.querySelector(".search");
const input = document.querySelector("input");
const items = document.querySelector(".items");
const clear_all = document.querySelector(".clear");

let text, new_div, img;
form.onsubmit = (e) => {
  e.preventDefault();

  if (input.value) {
    new_div = document.createElement("div");
    new_div.classList.add("item");

    text = document.createElement("p");
    text.innerHTML = input.value;
    new_div.appendChild(text);

    new_div.style.display = "flex";
    new_div.style.justifyContent = "space-between";

    img = document.createElement("img");
    img.width = 15;
    img.height = 20;
    img.src = "delete-svgrepo-com.svg";
    img.style.cursor = "pointer";

    new_div.appendChild(img);
    items.appendChild(new_div);

    img.onclick = (e) => {
      e.target.parentNode.remove();
    };
  }
  input.value = "";
};

clear_all.onclick = () => {
  location.reload();
};
