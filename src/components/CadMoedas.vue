<template>
  <div class="container">
    <h2>
      Minhas moedas
      <router-link to="/formmoedas" class="btn btn-danger float-right ml-3">
        <i class="fas fa-plus-circle"></i> Adicionar
      </router-link>
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
          <th>Tipo</th>
          <th>Preço R$</th>
          <th>Destaque</th>
          <th>Foto</th>
          <th>Opções</th>
        </tr>
        <tr v-for="moeda in moedas" :key="moeda.id">
          <td>{{ moeda.moeda }}</td>
          <td>{{ moeda.tipo }}</td>
          <td>{{ moeda.preco }}</td>
          <td>{{moeda.destaque}}</td>
          <td><img :src="moeda.foto" alt="Foto da Moeda" /></td>
          <td>
            <button
              class="btn btn-sm btn-info mx-1"
              title="Destacar"
              @click="destacar(moeda.id)"
            >
              <i class="far fa-star"></i>
            </button>
            <button
              class="btn btn-warning btn-sm mx-1"
              title="Alterar"
              @click="editar(moeda.id)"
            >
              <i class="far fa-edit"></i>
            </button>
            <button
              class="btn btn-danger btn-sm mx-1"
              title="Excluir"
              @click="excluir(moeda.id, moeda.moeda)"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </td>
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
        moeda: null,
        preco: null,
        tipo_id:null,
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
  axios.get(this.$urlAPI + "/moedas").then((response) => 
      (this.moedas = response.data))
      this.filtro =""
},

editar(id) {
      axios
        .get(this.$urlAPI + "/moedas/" + id)
        .then((response) => {
          this.moeda = response.data
          this.$router.push({ path: "/formmoedas", query: { altera: this.moeda }})
        });
    },
destacar(id) {
      axios.put(this.$urlAPI + "/moedas/destaque/" + id).then((response) => {
        if (response.status == 200) {
          this.listar();
        }
      });
    },
excluir(id, moeda) {
      if (confirm(`Confirma a Exclusão da Moeda '${moeda}'?`)) {
        axios.delete(this.$urlAPI + "/moedas/" + id).then((response) => {
          if (response.status == 200) {
            alert(`Ok! Moeda '${moeda}' excluída com sucesso!`);
            this.listar();
          }
        });
      }
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