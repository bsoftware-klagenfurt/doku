<script lang="ts">
	import { base } from '$app/paths';

	export let data: {
		section: string;
		docs: { slug: string; title: string; description?: string }[];
	};
</script>

<h1>{data.section}</h1>
<ul>
	{#each data.docs as doc}
		<li>
			<a href={`${base}/${doc.slug}`}>{doc.title}</a>
			{#if doc.description}<div>{doc.description}</div>{/if}
		</li>
	{/each}
</ul>
