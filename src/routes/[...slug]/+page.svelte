<script lang="ts">
	import { base } from '$app/paths';
	export let data: { slug: string; title: string; description?: string; html: string };
	const section = data.slug.startsWith('webapps/')
		? 'webapps'
		: data.slug.startsWith('eigenloesung/')
			? 'eigenloesung'
			: null;
</script>

<nav>
	<a href="{base}/">Home</a>
	{#if section}
		<span> / </span>
		<a href="{base}/{section}">{section}</a>
	{/if}
</nav>

<h1>{data.title}</h1>
{#if data.description}<p>{data.description}</p>{/if}
<div>{@html data.html}</div>
