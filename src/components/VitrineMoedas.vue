<template>
<div>
<h1>Cadastre as Suas Criptos com a Crito Facil</h1>
<section class="grid stretch">
	<div class="item">
        <h1>Bitcoin</h1>
        <img src=https://logosmarcas.net/wp-content/uploads/2020/08/Bitcoin-Logo.png height="180px" width="275px">
        <h2>Invista no mercado mais promissor do seculo 21</h2>
        
    </div>
	<div class="item">
        <h1>ETH</h1>
        <img src=https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png height="180px" width="275px">
		<h2>Conheça o nosso Serviço</h2>

    </div>
	<div class="item">
        <h1>ADA</h1>
        <img src=https://cryptologos.cc/logos/cardano-ada-logo.png height="180px" width="200px">
        <h2>Mais de 1.000,00 de clientes satisfeitos</h2>
        
    </div>
	<div class="item">
         <h1>Link</h1>
        <img src=https://cryptologos.cc/logos/chainlink-link-logo.png height="180px" width="200px">
        <h2>Venha cadastrar as suas Criptos</h2>
        
    </div>
</section>
<h2>Venha para a Cripto Facil</h2>
<div class="botoes">
<router-link class="btn btn-warning" to="/formcadastro" >Faça seu Cadastro agora</router-link>
<router-link class="btn btn-warning" to="/comentarios">Clique Aqui para nos deixar um comentario!!</router-link>
</div>
</div>
</template>

<script>

</script>

<style  scoped>
.grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr); 
	grid-template-rows:repeat(1, 400px);
}

.start {
	align-items: start;
}

.end {
	align-items: end;
}

.center {
	align-items: center;
}

.stretch {
	align-items: stretch;
}

.item-2, .item-3 {
	grid-row: span 2;
}

.item-5 {
	grid-column: span 2;
}

/* Grid Item */
.item {
    
	margin: 3px;
	background: tomato;
	text-align: center;
	font-size: 1.5em;
}

.grid {
     
    max-height: 80%;
	max-width: 80%;
	margin: 0 auto;
	border: 1px solid #ccc;
}

h1 {
   
	text-align: center;
	font-size: 1.25em;
	font-weight: normal;
}

body {
	font-family: monospace;
	color: #333;
	padding-bottom: 60px;
	margin: 0px;
}

body > div {
	padding: 40px 0;
}

body > div:nth-of-type(even) {
	background: rgba(0,0,0,.03);
}

body > div > img {
	display: block;
	margin: 0 auto;
	max-width: 100%;
    
}

img{
    margin: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
    }

.btn1{
    margin-top: 15px;
}
h1{
	font-size: 40px;
	margin: 15px;
}
h2{
	margin: 10px;
	font-size: 25px;
	text-align: center;
}
.btn{
margin: 10px;
}
.botoes{
	text-align: center;
	align-items: center;
}
</style>