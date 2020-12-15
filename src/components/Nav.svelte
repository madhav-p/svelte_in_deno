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

<style>
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: orangered;
    padding: 0.5em;
  }
  li {
    padding: 0.5em;
    color: whitesmoke;
    list-style: none;
  }
  li:hover {
    background-color: rgb(253, 110, 57);
  }
</style>
