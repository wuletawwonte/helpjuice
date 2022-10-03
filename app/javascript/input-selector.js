
class InputSelector {
  constructor(key) {
    this.key = key;
    this.heading = `
      <div class="selector-heading">  
        <h3>Add blocks</h3>
        <p>Keep typing to filter, or escape to exit</p>
      </div>
    `;
    this.selector = document.createElement('div');
    this.selector.id = "inputselector";
    this.selector.className = "input-selector";
    this.selector.innerHTML = this.heading;  
  }

  reset() {
    this.selector.innerHTML = this.heading;
  }

  setKey(mykey) {
    this.key = mykey;
    this.selector.innerHTML = this.heading + `
      <h4>Filtering keyword <span>${this.key}</span></h4>
      <ul>
        <li class="h1">
          <i class="fa-solid fa-t h1"></i>
          <div class="h1">
            <h3 class="h1">Heading 1</h3>
            <p class="h1">Shortcut: type # + space</p>
          </div>
        </li>
        <li>
          <i class="fa-solid fa-t"></i>
          <div>
            <h3>Expanding Heading 1</h3>
            <p>Shortcut: type >># + space</p>
          </div>
        </li>
      </ul>
    `;
  }
}


export default InputSelector;
