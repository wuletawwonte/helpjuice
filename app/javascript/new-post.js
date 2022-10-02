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
    resetField();
    headerOne.focus();
  }
});

function createHeaderOne() {
  const newEl = document.createElement('h1');
  newEl.contentEditable = true;
  newEl.setAttribute("placeholder", "Heading 1");
  newEl.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
      e.preventDefault();
      currentInput.focus();
    }
  })
  return newEl;   
}

function resetField() {
  currentInput.value = "";
  currentInput.placeholder = "";
}

currentInput.addEventListener("focus", () => {
  currentInput.placeholder = PLACEHOLDER;
});
