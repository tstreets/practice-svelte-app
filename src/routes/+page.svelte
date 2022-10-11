<script>
	import ExpenseForm from '$lib/ExpenseForm.svelte';
	import Icon from '$lib/Icon.svelte';
	export let data;

	if (false) console.log(data);

	import { allExpenses } from '$lib/stores.js';

	let allExpensesArr = [];
	allExpenses.subscribe(function (value) {
		allExpensesArr = value;
	});

	let openNewExpenseForm = false;

	function toggleExpenseForm() {
		openNewExpenseForm = !openNewExpenseForm;
	}

	function addExpense(newExpenseData) {
		const newId = allExpensesArr.reduce((acc, exp) => (acc > exp.id ? acc : exp.id), 0) + 1;
		const expenseDataToAdd = {
			...newExpenseData,
			id: newId
		};
		allExpenses.set([...allExpensesArr, expenseDataToAdd]);
	}

	function afterSubmit(newExpenseData) {
		addExpense(newExpenseData);
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<button class="button is-primary" on:click={toggleExpenseForm}>
	<Icon name="plus" style="margin-right: 8px;" />
	Add New Expense
</button>

{#if openNewExpenseForm}
	<ExpenseForm {toggleExpenseForm} {afterSubmit} />
{/if}
