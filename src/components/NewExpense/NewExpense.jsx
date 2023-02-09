import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpenseHandler }) => {
	const saveExpenseDataHandler = (inputExpenseData) => {
		const expenseData = {
			...inputExpenseData,
			id: Math.random().toString(),
		};

		onAddExpenseHandler(expenseData);
	};
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
