<template>
    <div class="container">
    <h2>Inclusão de Moedas
      <router-link class="btn btn-warning float-right" to="/">
        <i class="fas fa-undo"></i> Voltar</router-link>
    </h2>
    <form @submit.prevent="salvar">
      <div class="row">
        <div class="col-sm-9">
          <div class="form-group">
            <label for="nome">Moeda</label>
            <input type="text" id="nome" class="form-control" 
            v-model="moeda.moeda"
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

</script>

<style scoped>

</style>