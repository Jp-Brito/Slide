import { Slide, SlideNav } from "./slide.js";
const slidef = new SlideNav(".slide", ".wrapper");
slidef.init();
slidef.addArrow(".prev", ".next");
