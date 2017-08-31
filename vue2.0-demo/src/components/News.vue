<template>
	<div id="news">
		<h3>我是新闻页</h3>
		<ul class="news">
			<li v-for="(val,index) in news">
				{{val}}
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'news',
		data(){
			return {
				news:['111111','22222222','3333333333','4444444444']
			}
		}
	}
</script>
<style>
    .news li{ border-bottom:1px dashed #dedede; }
</style>
