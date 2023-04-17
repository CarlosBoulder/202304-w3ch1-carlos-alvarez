import AppComponent from "./components/AppComponent/AppComponent.js";
import CharacterListComponent from "./components/CharacterListComponent/CharacterListComponent.js";

const body = document.querySelector("body");

new AppComponent(body);

const app = document.querySelector(".app");

new CharacterListComponent(app);
