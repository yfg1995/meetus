<template>
  <section class="p_120">
    <div class="not-found flex align-center">
      <h1>404</h1>
      <h2>This page could not be found.</h2>
      <p>Maybe try going back to <router-link to="/">home</router-link>.</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.not-found {
  margin: 0 auto;
  flex-direction: column;
  width: 50%;
  text-align: center;
  padding: 20px 0 50px;
}
.not-found h1 {
  font-size: 5em;
  line-height: 1.25em;
}
.not-found h2 {
  font-size: 3em;
  color: var(--vt-c-grey-soft);
}
.not-found p {
  font-size: 2em;
  line-height: 1.25em;
}
.not-found a {
  transition: all 0.3s ease-in-out;
  line-height: 1.25em;
}
.not-found a:hover {
  text-decoration: underline;
}
.not-found h1,
.not-found a {
  color: var(--clr-primary);
}
</style>
