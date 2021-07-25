<template>
  <div class="container">
    <h2>
      Inclusão de usuarios
      <router-link class="btn btn-warning float-right" to="/formlogin">
        <i class="fas fa-undo"></i> Voltar</router-link
      >
    </h2>
    <form @submit.prevent="salvar">
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="nome">Nome</label>
            <input
              type="text"
              id="nome"
              class="form-control"
              v-model="usuario.nome"
              required
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="usuario.email"
              required
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="senha">Senha</label>
            <input
              type="text"
              id="senha"
              class="form-control"
              v-model="usuario.senha"
              required
            />
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-success px-4 mr-2">
        <i class="far fa-save"></i> Salvar
      </button>
      <button type="reset" class="btn btn-danger px-4">
        <i class="far fa-window-restore"></i> Limpar
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      usuario: {
        nome: null,
        email: null,
        senha: null,
      },
    };
  },
  methods: {
    salvar() {
      axios.post(this.$urlAPI + "/usuarios", this.usuario);
      alert(`Ok! Seu Usuario foi Cadastrado`);
    },
  },
};
</script>


<style>
</style>