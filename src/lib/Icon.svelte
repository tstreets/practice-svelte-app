<script>
	export let name;

	const fasNames = {
		home: 'fas fa-home',
		cash: 'fas fa-file-invoice-dollar',
		bank: 'fas fa-piggy-bank',
		columns: 'fas fa-columns',
		plus: 'fa-solid fa-circle-plus',
		check: 'fa-solid fa-check',
		x: 'fa-solid fa-x',
		'x circle': 'fa-regular fa-circle-xmark',
		'x circle solid': 'fa-solid fa-circle-xmark',
		edit: 'fa-solid fa-pencil'
	};

	export let style = '';
</script>

{#if name}
	<i class={fasNames[name]} {style} />
{/if}

<style>
	i {
		font-size: 18px;
		color: #ffffff;
	}
</style>
