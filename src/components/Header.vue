<template>
  <header>
    <div class="container">
      <div class="header flex">
        <div class="logo">
          <router-link to="/">
            <h1 class="bold">meetus</h1>
          </router-link>
        </div>

        <ul>
          <li>
            <router-link to="/">home</router-link>
          </li>
          <li>
            <router-link to="/about-us">about us</router-link>
          </li>
          <li>
            <router-link to="/services">services</router-link>
          </li>
          <li>
            <router-link to="/contact">contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background: linear-gradient(to right, #007bff, #6de0ec);
}

.header {
  justify-content: space-between;
  align-items: center;
  min-height: 120px;
}

a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
}

ul {
  display: flex;
}

li {
  list-style: none;
  margin: 0 20px;
}

ul li a {
  position: relative;
  padding: 0 0 10px;
}

ul li a:before {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 0%;
  background: #007bff;
  height: 2px;
  transition: all 0.2s ease-in-out;
}

ul li a:hover:before {
  width: 100%;
}

img {
  object-fit: contain;
}
</style>