import { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses({ items }) {
	const [year, setYear] = useState('2023');

	const yearPickHandler = (year) => {
		console.log('in expenses', year);
		setYear(year);
	};

	const yearFilterExpenses = items.filter((item) => {
		if (item.date.getFullYear().toString() === year) {
			return true;
		} else {
			return false;
		}
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={year} onYearPick={yearPickHandler} />
				<ExpensesChart expenses={yearFilterExpenses} />
				<ExpensesList items={yearFilterExpenses} />
			</Card>
		</div>
	);
}

export default Expenses;
