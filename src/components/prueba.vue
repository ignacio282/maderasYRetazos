<template>
  <v-app-bar color="rgba(255, 255, 255)" height="100" absolute="" class="barra pb-10" flat >
    <router-link class="homeLink" style="color:black; text-decoration: none;" to="/">
    <v-toolbar-title class="pl-5">
      MADERAS Y RETAZO
    </v-toolbar-title>
    </router-link>
    <v-spacer class="hidden-sm-and-down" />

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text x-large depressed href="/catalogo">Catalogo</v-btn>
      <v-btn text x-large>Quienes somos</v-btn>
      <v-btn text x-large>Contacto</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.barra {
  font-weight: 700;
}
.link {
  text-decoration: none;
  color: black;
}

</style>