<template>
 <div class="container">
   <h2>Gráfico Relacionando Nº de Moedas Iguais</h2>
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
      moedas_tipo: [["Moeda", "N° Moedas"]],
    }
  }, 
  mounted() {
    axios.get(this.$urlAPI + "/grafico2")
         .then(response => {
           const tipos = response.data;
           tipos.forEach(moeda => {
             this.moedas_tipo.push([moeda.moeda, moeda.num])             
           });
         })
  }
}
</script>

<style scoped>
</style>