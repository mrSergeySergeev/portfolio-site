class View {
  constructor() {
    this.memImageInputNode = document.querySelector("#memImageInput");
    this.memUpperTextInputNode = document.querySelector("#memUpperTextInput");
    this.memBottomTextInputNode = document.querySelector("#memBottomTextInput");
    this.memResultNode = document.querySelector("#memResult");

    this.memUpperTextInputNode.addEventListener("input", this.hadlerForInputs);
    this.memBottomTextInputNode.addEventListener("input", this.hadlerForInputs);
  }

  _getUpperText = () => {
    const text = this.memUpperTextInputNode.value;
    return text;
  };

  _getBottomText = () => {
    const text = this.memBottomTextInputNode.value;
    return text;
  };

  hadlerForInputs = () => {
    const upperText = this._getUpperText();
    const bottomText = this._getBottomText();

    console.log(upperText);
    console.log(bottomText);
  };
}
