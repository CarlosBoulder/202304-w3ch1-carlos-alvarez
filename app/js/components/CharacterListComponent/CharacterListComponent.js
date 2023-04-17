import Component from "../Component/Component.js";

class CharacterListComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "ul", "characters-list row list-unstyled");
  }
}

export default CharacterListComponent;
