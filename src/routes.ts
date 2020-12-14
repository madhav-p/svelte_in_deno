import Home from "./pages/Home.svelte";
import About from "./pages/About.svelte";
import Contact from "./pages/Contact.svelte";
import { writable } from "svelte/store";

export const pages = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
};

export const currentPath = writable("/");
