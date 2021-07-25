<template>
  <nav class="navbar navbar-expand-sm bg-primary navbar-dark mb-3">
    <img src="https://www.pngitem.com/pimgs/m/299-2994667_blockchain-development-icon-png-transparent-png.png" class="mx-3" />
    <router-link class="navbar-brand" to="/">Cripto Facil</router-link>

    <!-- Links -->

    <ul class="navbar-nav">
      <!-- Dropdown -->
      <li class="nav-item dropdown" v-if="user">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbardrop"
          data-toggle="dropdown"
        >
          Cadastros
        </a>

        <div class="dropdown-menu ">
         
          <router-link class="dropdown-item" to="/cadmoedas"
            >Moedas</router-link
          >
        </div>
      </li>



      <li class="nav-item dropdown" v-if="user">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbardrop"
          data-toggle="dropdown"
        >
          Gráficos
        </a>

        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="/grafico">Tipos</router-link>
          <router-link class="dropdown-item" to="/grafico2">Moedas</router-link>
        </div>
      </li>

      <li class="nav-item" v-if="user">
        <router-link class="nav-link" to="/teladestaque">Destaques</router-link>
      </li>
    </ul>

    <ul class="navbar-nav ml-auto">
      <!-- Dropdown -->
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbardrop"
          data-toggle="dropdown"
        >
          <i class="fas fa-user mr-1"></i>
          <span v-if="user">{{ user }}</span>
          <span v-else>(Não logado)</span>
        </a>
        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="/formlogin">Login</router-link>
          <router-link class="dropdown-item" to="/formlogin" @click="sair">Logout</router-link>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    user: String,
  },
  methods: {
    sair() {
      localStorage.removeItem("token");
      this.$$parent.mudaUser(null);

    },
  },
};
</script>

<style scoped>
img {
  width: 60px;
  height: 40px;
}
</style>
