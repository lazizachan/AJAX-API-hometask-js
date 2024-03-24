let xhr = new XMLHttpRequest();
const requestUrl = `https://reqres.in/api/unknown`;
xhr.open("GET", requestUrl, true);

let colorsContainer = document.querySelector(".colors");
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    const info = JSON.parse(xhr.response);
    if (info.data) {
      info.data.forEach((item) => {
        let color_box = document.createElement("div");
        color_box.textContent = `${item.name}`;
        color_box.style.backgroundColor = item.color;
        colorsContainer.appendChild(color_box);
      });
    }
  } else {
    console.error("Oshibka:", xhr.statusText);
  }
};
xhr.onerror = () => {
  alert("Oshibka zaprosa");
};

xhr.send();
