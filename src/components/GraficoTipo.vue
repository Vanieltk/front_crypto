<template>
 <div class="container">
   <h2>Gráfico Relacionando Nº de Tipos por Moedas</h2>
     <GChart
       type="PieChart"
       :data="moedas_tipo"
    />
 </div>   
</template>

<script>
import { GChart } from 'vue-google-charts'
import axios from 'axios'
 
export default {
  components: {
    GChart
  },
  data () {
    return {
      moedas_tipo: [["Tipo", "N° Moedas"]],
    }
  }, 
  mounted() {
    axios.get(this.$urlAPI + "/grafico")
         .then(response => {
           const tipos = response.data;
           tipos.forEach(tipo => {
             this.moedas_tipo.push([tipo.tipo, tipo.num])             
           });
         })
  }
}
</script>

<style scoped>
</style>