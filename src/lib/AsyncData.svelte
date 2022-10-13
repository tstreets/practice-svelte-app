<script>
	export let data = {};
</script>

{#if data.name === 'Tom'}
	<slot name="loading" />
{:else if data.name === 'Cat'}
	<slot name="loaded" />
{:else}
	<slot name="failed" />
{/if}
