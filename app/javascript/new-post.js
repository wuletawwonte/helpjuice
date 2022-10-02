const PLACEHOLDER = "Type / for blocks, @ to link docs or poeple";

const newPost = document.getElementById('newpost');
const title = document.getElementById('title');
const currentInput = document.createElement("input");

title.addEventListener('keyup', (e) => {
  if(e.key === "Enter") {
    currentInput.focus();
  }
})

currentInput.type = "text";
currentInput.placeholder = PLACEHOLDER;

newPost.appendChild(currentInput);

currentInput.addEventListener('keyup', (e) => {
  if(e.key === "Enter" && currentInput.value === "/1") {
    const headerOne = createHeaderOne();
    newPost.insertBefore(headerOne, currentInput);
    currentInput.value = "";
    headerOne.focus();
  }
});

function createHeaderOne() {
  const newEl = document.createElement('h1');
  newEl.contentEditable = true;
  newEl.setAttribute("placeholder", "Heading 1");
  newEl.addEventListener('keydown', (e) => {
    if(e.key === "Enter") {
      e.preventDefault();
      if(newEl.innerHTML === "<br>") {
        newEl.innerHTML = "";
      }
      currentInput.focus();
    }
    if(e.code === "Backspace" && newEl.innerText === "") {
      if(newEl === newEl.parentNode.firstChild) {
        title.focus();
      }
      newEl.parentElement.removeChild(newEl);
    }
    if(e.code === "Backspace" && newEl.innerHTML === "<br>") {
      newEl.innerHTML = "";
    }
  })
  return newEl;   
}

currentInput.addEventListener("focus", () => {
  currentInput.placeholder = PLACEHOLDER;
});
