<template>
  <nav>
    <v-toolbar flat class="navy">
      <router-link to="/" class="text-logo">
        <v-toolbar-title class="text-uppercase cyan--text text--lighten-2">
          <span class="font-weight-light subtitle-1">Corona</span>
          <span class="font-weight-bold">Virus</span>
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          active-class="no-active"
          class="link"
          v-for="link in links"
          :key="link.title"
          router
          :to="link.route"
          :class="false"
          >{{ link.title }}</v-btn
        >
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Dashboard", route: "/" },
        { title: "Wiki", route: "/wiki" },
      ],
    };
  },
};
</script>

<style>
.navy {
  background-color: #101f3e !important;
}

.v-btn--active.no-active::before {
  opacity: 0 !important;
}

.text-logo {
  text-decoration: none !important;
}

.link {
  color: #84ffff !important;
  cursor: pointer;
  background-color: #101f3e !important;
  box-shadow: none !important;
}
</style>