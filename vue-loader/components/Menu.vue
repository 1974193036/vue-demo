<template>
	<ul>
		<li>111</li>
		<li>222</li>
		<li>111</li>
		<li>222</li>
		<li>{{msg}}</li>
	</ul>
	<ul class="ad">
		<li v-for="val in list">
			{{val}}
		</li>
	</ul>
</template>
<script>
	export default{
		data(){
			return {
				list:['apple','banana','orange'],
				msg:'apples'
			}
		}
	}
</script>
<style>
	.ad{
		color: red;
		font-size: 25px;
	}
</style>