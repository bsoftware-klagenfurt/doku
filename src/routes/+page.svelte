<script lang="ts">
	import { base } from '$app/paths';
	export let data: { sections: string[] };
</script>

<h1>Dokumentation</h1>
<ul>
	{#each data.sections as section}
		<li>
			<a href={`${base}/${section}`}>{section}</a>
		</li>
	{/each}
</ul>
