const image = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.open("GET", "https:dog.ceo/api/breeds/image/random");
  xhr.send();
});
