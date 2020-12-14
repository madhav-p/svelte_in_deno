<script>
  import Nav from "./components/Nav.svelte";
  import { currentPath, pages } from "./routes.ts";
</script>

<svelte:window on:popstate={() => currentPath.set(window.location.pathname)} />
<Nav />
<main>
  <!-- <svelte:component this={pages[currentPath_value]} /> -->
  <svelte:component this={pages[$currentPath]} />
</main>
