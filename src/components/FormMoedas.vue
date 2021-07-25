<template>
<div class="container">
    <h2>
      <span v-if="moeda.id">Alteração de Moedas</span>
      <span v-else>Inclusão de Moedas</span>

      <router-link class="btn btn-warning float-right" to="/cadmoedas">
        <i class="fas fa-undo"></i> Voltar</router-link>
      >
    </h2>
    <form @submit.prevent="salvar">
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="nome">Moeda</label>
            <input type="text" id="nome" class="form-control" 
            v-model="moeda.moeda"
            required>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="tipo_id">Tipo</label>
            <select id="tipo_id" class="form-control" 
                 v-model="moeda.tipo_id"
                 required>
                 <option v-for="tipo in tipos" :key="tipo.id" :value="tipo.id">
                     {{ tipo.tipo }}
                 </option>
            </select>
          </div>
        </div>
        </div>
        <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="preco">Preço R$</label>
            <input type="text" id="preco" class="form-control" 
                v-model="moeda.preco"
                required>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-9">
          <div class="form-group">
            <label for="foto">URL da Foto:</label>
            <input type="text" id="foto" class="form-control" 
                v-model="moeda.foto"
                required>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-success px-4 mr-2"><i class="far fa-save"></i> Salvar</button>
      <button type="reset" class="btn btn-danger px-4"><i class="far fa-window-restore"></i> Limpar</button>
    </form>
  </div>
    
</template>

<script>

import axios from 'axios'

export default{
data(){
return{
    moeda :{
        moeda: null,
        tipo_id: null,
        preco: null,
        foto: null,
    },
    tipos: null
}
},
  methods: {
     altera() {
      axios.put(this.$urlAPI + "/moedas/" + this.moeda.id, this.moeda)
        .then((response) =>
          alert(`Ok! Moeda Alterada Corretamente ${response.data}`)
        );
        console.log(this.$urlAPI + "/moedas/" + this.moeda.id)
    },

    inclui() {
      if(localStorage.getItem("token"))
      {console.log(this.tipo)
      axios.post(this.$urlAPI+"/moedas", this.moeda,
      {
          headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
      })
      .then(response => alert(`Ok! moeda Cadastrada com código ${response.data.id}`))
      this.moeda ={}
      }else{
        alert("erro... Faça Login para Realizar a Inclusão")
      }
         
    },
    salvar(){
       if (this.moeda.id) {
        this.altera();
      } else {
        this.inclui();
      }
    },

  },
mounted(){
    axios.get(this.$urlAPI+"/tipos")
         .then(response => {this.tipos = response.data})
    
     if (this.$route.query.altera) {
       console.log(this.$route.query.altera)
      this.moeda = this.$route.query.altera;
    }
},
}
</script>


<style>

</style>