import InputSelector from "./input-selector";
const PLACEHOLDER = "Type / for blocks, @ to link docs or poeple";



const newPost = document.getElementById('newpost');
const title = document.getElementById('title');
const currentInputContainer = document.createElement('div');
const currentInput = document.createElement("input");
const inputSelector = new InputSelector("");

title.addEventListener('keyup', (e) => {
  if(e.key === "Enter") {
    currentInput.focus();
  }
})

currentInputContainer.className = "post__content__inputcontainer";
currentInput.type = "text";
currentInput.placeholder = PLACEHOLDER;

currentInputContainer.appendChild(currentInput);
currentInputContainer.appendChild(inputSelector.getSelector());
newPost.appendChild(currentInputContainer);

currentInput.addEventListener('keydown', (e) => {
  if(e.code !== "Slash" && currentInput.value === "/1") {    
    e.preventDefault();
    const headerOne = createHeaderOne();
    newPost.insertBefore(headerOne, currentInputContainer);
    currentInput.value = "";
    headerOne.focus();
  }
  if(e.code === "Slash" && currentInput.value === "") {
    inputSelector.reset();
    inputSelector.getSelector().classList.add('show');
  }
  if(e.code === "Digit1" && currentInput.value === "/") {
    inputSelector.setKey("1");
  }
});

currentInput.addEventListener('blur', () => {
  inputSelector.getSelector().classList.remove('show');
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
      currentInput.value = "";
    }
    if(e.code === "Backspace" && newEl.innerText === "") {
      e.preventDefault();
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
