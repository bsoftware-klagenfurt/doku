<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { base } from '$app/paths';
	import '../main.css';
	import '../markdown.css';
	import logo from '$lib/assets/logo.png';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="site-shell">
	<header class="site-header">
	
		<div class="container site-header-inner">
			<a class="brand" href={`${base}/`}>
				<img class="brand-logo" src={`${base}/logo.png`} alt="Bsoftware logo" />
				<span class="brand-text">
					<strong>Doku</strong>
					<small>Bsoftware Klagenfurt</small>
				</span>
			</a>

			<nav class="site-nav" aria-label="Main navigation">
				<a href={`${base}/`}>Home</a>
				<a href={`${base}/webapps`}>Webapps</a>
				<a href={`${base}/eigenloesung`}>Eigenloesung</a>
				<a href={`${base}/admin`}>Admin</a>
			</nav>
		</div>
	</header>

	<main class="site-main">
		<div class="page-content container-md">
			{@render children()}
		</div>
	</main>
</div>
