import {  floatingHeader  } from './floating-header.js';


floatingHeader.load();
floatingHeader.addDiv("home", "Home");
floatingHeader.addDiv("contactUs", "ContactUs");
floatingHeader.removeDiv("#home");
floatingHeader.addDiv("home", "Home");
floatingHeader.removeAll();