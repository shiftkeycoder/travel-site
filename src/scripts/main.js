import './include/Modernizr';
import "../styles/main.css";
import "jquery";
import "popper.js";
import "bootstrap";
import Engine from "./include/Engine";
import MobileMenu from './include/MobileMenu';

const app = new Engine;

app.hotInject();
app.vueInit();

new MobileMenu();



