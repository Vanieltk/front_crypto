<template>
  <div class="container">
    <h2>
      Minhas moedas Favoritas
      <form class="form-inline float-right">
        <input class="form-control form-control mr-1" type="text" v-model="filtro" @keyup="pesquisar"
               placeholder="Pesquisa">
        <button class="btn btn-success" @click.prevent="listar">Todos</button>
      </form>
    </h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Moeda</th>
          <th>Preço R$</th>
          <th>Foto</th>
        </tr>
        <tr v-for="moeda in moedas" :key="moeda.id">
          <td>{{ moeda.moeda }}</td>
          <td>{{ moeda.preco }}</td>
          <td><img :src="moeda.foto" alt="Foto da Moeda" /></td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      moeda :{
        id: null,
        moeda: null,
        tipo_id: null,
        preco: null,
        foto: null,
        destaque:null
    },
    filtro: "",
    moedas: []
    };
  },

  mounted() {
    this.listar()
  },
methods: {
listar(){
  axios.get(this.$urlAPI + "/moedas/destaques").then((response) => 
      (this.moedas = response.data))
      this.filtro =""
},

   pesquisar() {
      if (this.filtro.length == 0) {
        this.listar();     // mostra todos
      } else {
        axios
          .get(this.$urlAPI + "/moedas/pesq/" + this.filtro)
          .then((response) => (this.moedas = response.data));
      }
    },

},
  filters: {
    estiloMoeda(value) {
      return (
        Number(value).tolocaleString("pt-br"), { minimumFractionDigits: 2 }
      );
    },
  },

  
};
</script>
<style scoped>
table img {
  width: 100px;
  height: 60px;
}
</style>