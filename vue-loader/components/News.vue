<template>
	<h3>我是新闻</h3>
	<ul>
		<li><a v-link="{path:'/news/detail/001?a=1&b=22'}">第一条新闻</a></li>
		<li><a v-link="{path:'/news/detail/002?a=1&b=3'}">第二条新闻</a></li>
	</ul>
	<router-view></router-view>
</template>