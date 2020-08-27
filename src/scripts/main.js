import './include/Modernizr';
import "../styles/main.css";
import "jquery";
import "popper.js";
import "bootstrap";
import Engine from "./include/Engine";

const app = new Engine;

app.hotInject();
app.vueInit();





