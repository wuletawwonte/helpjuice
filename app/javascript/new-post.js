const newPost = document.getElementById('newpost');
const title = document.getElementById('title');
const currentInput = document.createElement("input");

title.addEventListener('keyup', (e) => {
  if(e.key === "Enter") {
    console.log("Enter is pressed");
    currentInput.focus();
  }
})

currentInput.type = "text";
currentInput.placeholder = "Type / for blocks, @ to link docs or poeple";

currentInput.addEventListener('focus', () => {
  currentInput.value = "What";

});

newPost.appendChild(currentInput);
