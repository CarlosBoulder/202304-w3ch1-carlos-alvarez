import Character from "./characters/Character/Character.js";
import { characters } from "./characters/characters.js";
import AppComponent from "./components/AppComponent/AppComponent.js";
import CardComponent from "./components/CardComponent/CardComponent.js";
import CharacterListComponent from "./components/CharacterListComponent/CharacterListComponent.js";

const body = document.querySelector("body");
new AppComponent(body);

const app = document.querySelector(".app");
new CharacterListComponent(app);

const characterList = document.querySelector(".characters-list");
characters.forEach((character) => new CardComponent(characterList, character));
