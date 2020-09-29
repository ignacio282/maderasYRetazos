<template>
  <div>
    <v-col cols="12" md="4" v-for="product in products" :key="product.id">
      <v-card max-width="600" flat :id="product.id">
        <v-img src="https://via.placeholder.com/400"></v-img>
        <v-card-text class="text--primary">
          <h1 id="titulo" class="font-weight-light mt-3">{{product.nombre}}</h1>
          <h2 id="categoria" class="font-weight-thin mt-3">{{product.categoria}}</h2>
          <p class="mt-3 font-weight-light" id="descripcion">{{product.descripcion}}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import firebase from "../firebase";
import { db } from "../firebase";

export default {
  name: "tarjetaProd",
  data() {
    return {
      products: []
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
  }
};
</script>
<style lang="scss" scoped>
</style>