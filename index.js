const button = document.querySelector("button");
const list = document.querySelector("ul");

const URL_API =
  "https://raw.githubusercontent.com/giacomotolari/json-fetch/main/data.json";

button.addEventListener("click", () => {
  fetch(URL_API)
    .then((response) => response.json())
    .then((data) =>
      data.map((person) => {
        return (list.innerHTML += `<li>${person.firstName} - ${person.lastName} -${person.age}</li>`);
      })
    );
});
