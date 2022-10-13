<script>
	import ExpenseForm from '$lib/ExpenseForm.svelte';
	import Icon from '$lib/Icon.svelte';
	import ExpenseTable from '$lib/ExpenseTable.svelte';

	export let data;

	if (true) console.log(data);

	import { allExpenses } from '$lib/stores.js';
	import AsyncData from '../lib/AsyncData.svelte';

	let allExpensesArr = [];
	allExpenses.subscribe(function (value) {
		allExpensesArr = value;
	});

	let openNewExpenseForm = false;

	let selectedExpense = {};

	function toggleExpenseForm() {
		openNewExpenseForm = !openNewExpenseForm;
		selectedExpense = {};
	}

	function addExpense(newExpenseData) {
		if (newExpenseData.id) {
			const filteredExpenses = allExpensesArr.filter((exp) => exp.id !== newExpenseData.id);
			filteredExpenses.push(newExpenseData);
			allExpenses.set(filteredExpenses.sort((a, b) => (a.id > b.id ? 1 : -1)));
		} else {
			const newId = allExpensesArr.reduce((acc, exp) => (acc > exp.id ? acc : exp.id), 0) + 1;
			const expenseDataToAdd = {
				...newExpenseData,
				id: newId
			};
			allExpenses.set([...allExpensesArr, expenseDataToAdd]);
		}
	}

	function afterSubmit(newExpenseData) {
		addExpense(newExpenseData);
	}

	function selectExpenseToEdit(expense) {
		toggleExpenseForm();
		selectedExpense = { ...expense };
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
	<ExpenseForm {toggleExpenseForm} {afterSubmit} initialExpenseData={selectedExpense} />
{/if}

<ExpenseTable {allExpensesArr} {selectExpenseToEdit} />

<!-- <AsyncData data={{ name: 'Tom' }}>
	<h1 slot="failed">Data Failed to Load</h1>
	<h1 slot="loaded">Something else</h1>
	<h1 slot="loading">Last One</h1>
</AsyncData> -->

<!-- {#await data.pokemonObj}
	<p>Data is loading</p>
{:then apiResponse}
	<ul>
		{#each apiResponse.results as pokemon}
			<li>{pokemon.name}</li>
		{/each}
	</ul>
{:catch e}
	<p>There was error {e}</p>
{/await} -->
