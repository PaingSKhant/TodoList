import "./style.css";
import "./modal/modal.css"

import {initModal} from "./modal/modal.js"


const user = { name: "Alex", score: 100 };

const varUser = "KoPaing"
// Saving
localStorage.setItem("a", varUser); 

// Retrieving
const savedUser = localStorage.getItem("a");




initModal();

