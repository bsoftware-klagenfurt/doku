<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import '../main.css';
	import '../markdown.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="site-shell">
	<header class="site-header">
		<div class="container site-header-inner">
			<a class="brand" href={resolve('/')}>
				<img class="brand-logo" src={resolve('/logo.png')} alt="Bsoftware logo" />
				<span class="brand-text">
					<strong>Doku</strong>
					<small>Bsoftware Klagenfurt</small>
				</span>
			</a>

			<nav class="site-nav" aria-label="Main navigation">
				<a href={resolve('/')}>Home</a>
				<!-- <a href={resolve('/admin/')} rel="external">Admin</a> -->
			</nav>
		</div>
	</header>

	<main class="site-main">
		<div class="page-content container-md">
			{@render children()}
		</div>
	</main>
</div>
