<script>
  import { currentPath } from "../routes.ts";
  export let path;
  const navigateTo = (path) => {
    console.log(path);
    currentPath.set(path);
    window.history.pushState(null, null, path);
  };
</script>

<a href={path} on:click|preventDefault={navigateTo(path)}><slot /></a>
