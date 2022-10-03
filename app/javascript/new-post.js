import InputSelector from "./input-selector";
const PLACEHOLDER = "Type / for blocks, @ to link docs or poeple";

const newPost = document.getElementById('newpost');
const title = document.getElementById('title');
const editStatus = document.getElementById('editstatus');
const editStatusIcon = document.getElementById('editicon');
const currentInputContainer = document.createElement('div');
const currentInput = document.createElement("input");
const inputSelector = new InputSelector("");

const addHeaderOne = () => {
  const headerOne = createHeaderOne();
  newPost.insertBefore(headerOne, currentInputContainer);
  currentInput.value = "";
  headerOne.focus();
  inputSelector.selector.classList.remove('show');
};

title.addEventListener('keyup', (e) => {
  if(e.key === "Enter") {
    currentInput.focus();
  }
})

currentInputContainer.className = "post__content__inputcontainer";
currentInput.type = "text";
currentInput.placeholder = PLACEHOLDER;

currentInputContainer.appendChild(currentInput);
currentInputContainer.appendChild(inputSelector.selector);
newPost.appendChild(currentInputContainer);

editStatusIcon.toggleClass = () => {
  if(editStatusIcon.className === "fa-solid fa-lock") {
    editStatusIcon.className = "fa-solid fa-unlock";
    editStatus.classList.remove('active');
    return false;
  } else if(editStatusIcon.className === "fa-solid fa-unlock") {
    editStatusIcon.className = "fa-solid fa-lock";
    editStatus.classList.add('active');
    return true;
  }
}

inputSelector.selector.addEventListener("click", (e) => {
  if(e.target.classList.contains('h1')) {
    addHeaderOne();
  } else {
    currentInput.focus();
  }
});

document.addEventListener('click', (e) => {
  if(!inputSelector.selector.contains(e.target)) {
    inputSelector.selector.classList.remove('show');
  }
});

// currentInput.addEventListener('focusout', () => {
//   inputSelector.selector.classList.remove('show');
// });

currentInput.addEventListener('keydown', (e) => {
  if(e.code !== "Backspace" && currentInput.value === "/1") {    
    e.preventDefault();
    addHeaderOne();
  }
  if(e.code === "Slash" && currentInput.value === "") {
    inputSelector.reset();
    inputSelector.selector.classList.add('show');
  }
  if(e.code === "Digit1" && currentInput.value === "/") {
    inputSelector.setKey("1");
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

editStatus.addEventListener('click', (e) => {
  e.preventDefault();
  if(editStatusIcon.toggleClass()) {
    const allBlocks = document.querySelectorAll('#newpost > h1[contenteditable=true]');
    allBlocks.forEach(block => {
      block.contentEditable = false;
    });
    newPost.removeChild(currentInputContainer);
  } else {
    const allBlocks = document.querySelectorAll('#newpost > h1[contenteditable=false]');
    allBlocks.forEach(block => {
      block.contentEditable = true;
    });
    newPost.append(currentInputContainer);
  }
});
