<template>
  <div class="home">
    <navBar />
    <v-container fluid>
      <v-row >
        <v-col cols="12" xs="12" sm="12" md="6">
        </v-col>
        <v-col cols="12" class="py-16  colText " xs="1" sm="1" md="6">
          <h1 class="text-md-h1 text-right">MADERAS Y RETAZOS</h1>
          <h2 class="mt-10 text-right font-weight-regular">El estilo que no sabias que necesitaba tu negocio</h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1935&q=80");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;

  
}
.colText{
  margin-top: 12%;
  padding-right: 8%;
}
</style>
