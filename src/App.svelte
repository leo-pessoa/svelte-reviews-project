<script>
  import Router, { location } from "svelte-spa-router";
  import Home from "./Home.svelte";
  import { wrap } from "svelte-spa-router/wrap";

  const routes = {
    "/": wrap({
      component: Home,
      // props: {
      //   cursos,
      // },
    }),
  };

  // const deleteFeedback = (e) => {
  //   const itemId = e.detail;
  //   feedback = feedback.filter((item) => item.id != itemId);
  // };

  // const addCourse = (e) => {
  //   const newCourse = e.detail;
  //   cursos = [newCourse, ...cursos];
  // };
</script>

<nav>
  <a href="/#/">Home</a>
  <a href="/#/blog">Blog</a>
</nav>

<main class="container">
  <Router {routes} />
</main>

<style>
  .container {
    background-color: #fff;
    padding: 20px 30px;
  }
</style>
