<script>
  import Link from "./Link.svelte";

  // export let navroutes
  const navroutes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
</script>

<ul>
  {#each navroutes as route}
    <li>
      <Link path={route.path}>{route.name}</Link>
    </li>
  {/each}
</ul>
