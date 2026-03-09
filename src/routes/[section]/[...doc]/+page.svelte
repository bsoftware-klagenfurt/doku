<script lang="ts">
	import { base } from '$app/paths';

	export let data: {
		section: string;
		slug: string;
		title: string;
		description?: string;
		html: string;
	};
</script>

<nav class="doc-breadcrumb">
	<a href={`${base}/`}>Home</a>
	<span> / </span>
	<a href={`${base}/${data.section}`}>{data.section}</a>
</nav>

<h1>{data.title}</h1>
{#if data.description}<p>{data.description}</p>{/if}
<article class="tina-content">{@html data.html}</article>
