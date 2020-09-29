<template>
  <div class="catalogo">
    <navBar id="inicio" />
    <foot />
    <v-speed-dial dark fixed class="ma-6 mx-12"  bottom right fab open-on-hover>
      <template v-slot:activator>
        <v-btn v-model="fab" color="pink" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-menu</v-icon>
        </v-btn>
      </template>
      
      <v-btn
        class="font-weight-medium"
        color="pink accent-2"
        text
        dark
        Large
        @click="$vuetify.goTo('#infantiles', options)"
      >INFANTILES</v-btn>
      <v-btn
        class="font-weight-medium"
        color="pink accent-2"
        text
        dark
        Large
        @click="$vuetify.goTo('#promocionales', options)"
      >PROMOCIONALES</v-btn>
      <v-btn
        class="font-weight-medium"
        color="pink accent-2"
        text
        dark
        Large
        @click="$vuetify.goTo('#nuevo', options)"
      >LO NUEVO</v-btn>
      <v-btn
        class="font-weight-medium"
        color="pink accent-2"
        text
        dark
        Large
        @click="$vuetify.goTo('#inicio', options)"
      >INICIO</v-btn>
    </v-speed-dial>

    <v-container fluid>
      <v-row class="jumbo">
        <v-col cols="12" xs="12" sm="12" md="4"></v-col>
        <v-col cols="12" class="colText" xs="12" sm="12" md="8">
          <h1 class="text-md-h2 text-center tituloJumbo">Catalogo de Productos</h1>
          <h2
            class="mt-10 text-center font-weight-regular descripcion"
          >Aliqua consectetur cupidatat amet qui ex tempor sit qui incididunt do in non enim enim. Adipisicing eiusmod Lorem aute magna voluptate cupidatat sint veniam. Qui incididunt pariatur proident non. Non ullamco nulla minim eu do ex ea et ex deserunt.</h2>
          <div class="text-center mt-10 px-16"></div>
        </v-col>
      </v-row>
    </v-container>
    <!--  ROW DE LO NUEVO -->
    <v-container fluid class="Galeria mb-sm-10 px-sm-10">

      <v-row class="px-0 my-16 text-md-h3 text-center text-md-left" >
        <v-col class="px-0" id="nuevo" >
          <h1 class="pl-sm-0 pl-md-10 font-weight-medium">LO NUEVO</h1>
        </v-col>
      </v-row>
      <v-row class="px-md-16 mb-16">
        <v-col cols="12" md="4" v-for="product in products" :key="product.id">
          <v-card max-width="600" flat :id="product.id">
            <v-img src="https://via.placeholder.com/400"></v-img>
            <v-card-text class="text--primary">
              <h1 id="titulo" class="font-weight-light mt-3">{{product.nombre}}</h1>
              <h2
                id="categoria"
                class="font-weight-thin mt-3 pink--text text--accent-2"
              >{{product.categoria}}</h2>
              <p class="mt-3 font-weight-light" id="descripcion">{{product.descripcion}}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!-- FIN ROW DE LO NUEVO -->

      <!--  ROW DE PROMOCIONALES -->
      <v-row class="px-0 mb-16 text-md-h3 text-center text-md-left">
        <v-col class="px-0" id="promocionales">
          <h1 class="pl-sm-0 pl-md-10 font-weight-medium">PROMOCIONALES</h1>
        </v-col>
      </v-row>
      <v-row class="px-md-16 mb-16">
        <v-col cols="12" md="4" v-for="product in productsPromocional" :key="product.id">
          <v-card max-width="600" flat :id="product.id">
            <v-img src="https://via.placeholder.com/400"></v-img>
            <v-card-text class="text--primary">
              <h1 id="titulo" class="font-weight-light mt-3">{{product.nombre}}</h1>
              <h2
                id="categoria"
                class="font-weight-thin mt-3 pink--text text--accent-2"
              >{{product.categoria}}</h2>
              <p class="mt-3 font-weight-light" id="descripcion">{{product.descripcion}}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!--  FIN ROW DE PROMOCIONALES -->
      <!--  ROW DE INFANTILES -->
      <v-row class="px-0 mb-16 text-md-h3 text-center text-md-left">
        <v-col class="px-0" id="infantiles">
          <h1 class="pl-sm-0 pl-md-10 font-weight-medium">INFANTILES</h1>
        </v-col>
      </v-row>
      <v-row class="px-md-16 mb-16">
        <v-col cols="12" md="4" v-for="product in productsInfantil" :key="product.id">
          <v-card max-width="600" flat :id="product.id">
            <v-img src="https://via.placeholder.com/400"></v-img>
            <v-card-text class="text--primary">
              <h1 id="titulo" class="font-weight-light mt-3">{{product.nombre}}</h1>
              <h2
                id="categoria"
                class="font-weight-thin mt-3 pink--text text--accent-2"
              >{{product.categoria}}</h2>
              <p class="mt-3 font-weight-light" id="descripcion">{{product.descripcion}}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!-- FIN ROW DE INFANTILES -->
    </v-container>
  </div>
</template>
<script>
// @ is an alias to /src
import firebase from "../firebase";
import { db } from "../firebase";

export default {
  name: "catalogo",
  data: () => ({
    show: false,
    fab: false
  }),
  data() {
    return {
      products: [],
      productsPromocional: [],
      productsInfantil: []
    };
  },
  mounted() {
    db.collection("products")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          this.products.push(doc.data());
        });
      });

    db.collection("products")
      .where("categoria", "==", "Promocional")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          this.productsPromocional.push(doc.data());
        });
      });

    db.collection("products")
      .where("categoria", "==", "Infantil")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          this.productsInfantil.push(doc.data());
          console.log(doc.id, " => ", doc.data());
        });
      });
  }
};
</script>
<style lang="scss" scoped>
.catalogo {
  font-family: "Poppins", sans-serif;
}

.jumbo {

  height: 100vh;
  background-image: url("../assets/images/coverWebMyR.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}
.colText {
  margin-top: 14%;
}

.descripcion {
  padding-left: 20%;
  padding-right: 20%;
}
</style>
