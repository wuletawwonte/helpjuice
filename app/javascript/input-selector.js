
class InputSelector {
  constructor(key) {
    this.key = key;
    this.heading = `
    <div class="selector-heading">  
      <h3>Add blocks</h3>
      <p>Keep typing to filter, or escape to exit</p>
    </div>
    `;
    const selector = document.createElement('div');
    selector.id = "inputselector";
    selector.className = "input-selector";
  
    selector.innerHTML = this.heading;  
    this.selector = selector;
  }

  setKey(mykey) {
    this.key = mykey;
    this.selector.innerHTML = this.heading + `
      <h4>Filtering keyword <span>${this.key}</span></h4>
      <ul>
        <li id="headingone">
          <i class="fa-solid fa-t"></i>
          <div>
            <h3>Heading 1</h3>
            <p>Shortcut: type # + space</p>
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
    console.log(this.selector);
  }

  getSelector() {
    return this.selector;
  }
}


export default InputSelector;
