<script>
	export let toggleExpenseForm = function () {};
	export let afterSubmit = function () {};
	export let initialExpenseData = {
		category: '',
		amount: '',
		date: '',
		summary: ''
	};

	const expenseData = { ...initialExpenseData };

	function submitExpense() {
		afterSubmit(expenseData);
		toggleExpenseForm();
	}
</script>

<div class="modal is-active">
	<div class="modal-background" on:mousedown={toggleExpenseForm} />
	<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title">
				{#if !expenseData.id}
					New Expense
				{:else}
					Edit Expense #{expenseData.id}
				{/if}
			</p>
			<button class="delete" aria-label="close" on:click={toggleExpenseForm} />
		</header>
		<section class="modal-card-body">
			<form id="expense-form" on:submit|preventDefault={submitExpense}>
				<div class="field">
					<label for="expense-summary" class="label">Summary</label>
					<input
						id="expense-summary"
						name="expense-summary"
						class="input"
						type="text"
						placeholder="Enter a clear and concise summary..."
						bind:value={expenseData.summary}
					/>
				</div>
				<div class="field">
					<label for="expense-date" class="label">Date Occurred</label>
					<input
						id="expense-date"
						name="expense-date"
						class="input"
						type="date"
						bind:value={expenseData.date}
					/>
				</div>
				<div class="field">
					<label for="expense-amount" class="label">Amount</label>
					<input
						id="expense-amount"
						name="expense-amount"
						class="input"
						type="number"
						step=".01"
						placeholder="21.00"
						bind:value={expenseData.amount}
					/>
				</div>
				<div class="field">
					<label for="expense-category" class="label">Category</label>
					<input
						id="expense-category"
						name="expense-category"
						class="input"
						type="text"
						placeholder="Enter the category name..."
						bind:value={expenseData.category}
					/>
				</div>
			</form>
		</section>
		<footer class="modal-card-foot">
			<button form="expense-form" class="button is-success" type="submit">
				{#if !expenseData.id}
					Add Expense
				{:else}
					Save Changes
				{/if}
			</button>
			<button class="button" on:click={toggleExpenseForm}>Cancel</button>
		</footer>
	</div>
</div>
