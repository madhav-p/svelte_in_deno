import Home from "./pages/Home.svelte.js";
import About from "./pages/About.svelte.js";
import Contact from "./pages/Contact.svelte.js";
import { writable } from "https://cdn.skypack.dev/svelte/store";
export const pages = {
    "/": Home,
    "/about": About,
    "/contact": Contact
};
export const currentPath = writable("/");
