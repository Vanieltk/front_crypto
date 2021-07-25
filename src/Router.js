import Vue from "vue"
import VueRouter from 'vue-router'

import VitrineMoedas from './components/VitrineMoedas'
import CadMoedas from './components/CadMoedas'
import FormMoedas from './components/FormMoedas'
import FormLogin  from './components/FormLogin'  
import GraficoTipo from './components/GraficoTipo'
import GraficoMoeda from './components/GraficoMoeda'
import FormCadastro from './components/FormCadastro'
import Comentarios from './components/Comentarios'
import TelaDestaque from './components/TelaDestaque'

Vue.use(VueRouter)

const routes=[
    {path: '/cadmoedas', component: CadMoedas},
    {path: '/formmoedas', component: FormMoedas},
    {path: '/formlogin', component: FormLogin },
    {path: '/formcadastro', component: FormCadastro },
    {path: '/grafico', component: GraficoTipo},
    {path: '/grafico2', component: GraficoMoeda},
    {path: '/comentarios', component: Comentarios},
    {path: '/', component: VitrineMoedas},
    {path: '/teladestaque', component :TelaDestaque}

]
export default new VueRouter({
    mode:'history',
    routes
})