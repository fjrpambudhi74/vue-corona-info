<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Dashboard,
    Footer,
  },
  watch: {
    /* eslint-disable */
    $route: {
      handler: (to, from) => {
        document.title = to.meta.title;
      },
      immediate: true,
    },
    /* eslint-disable */
  },
};
</script>

<style >
#app {
  background-color: #101f3e;
  color: #8bc5ff;
  text-align: center;
}
</style>
