import './styles.css'
import {homeContent} from './home.js'
import {menu} from './menu.js'
import { aboutContent } from './about.js';


const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

homeBtn.addEventListener("click", homeContent);
menuBtn.addEventListener("click", menu);
aboutBtn.addEventListener("click", aboutContent);

homeContent();

