<script>
	import Icon from '$lib/Icon.svelte';
	export let allExpensesArr;
	export let selectExpenseToEdit = function () {};
</script>

<table class="table">
	<thead>
		<tr>
			<th>Id</th>
			<th>Summary</th>
			<th>Date</th>
			<th>Amount</th>
			<th>Category</th>
			<th />
		</tr>
	</thead>
	{#each allExpensesArr as expense}
		<tr>
			<td>{expense.id}</td>
			<td>{expense.summary}</td>
			<td>{expense.date}</td>
			<td>{expense.amount}</td>
			<td>{expense.category}</td>
			<td>
				<button class="button is-black" on:click={selectExpenseToEdit.bind(null, expense)}>
					Edit
				</button>
			</td>
		</tr>
	{/each}
</table>

<style>
	.table {
		width: 100%;
	}
</style>
