import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
	// const [inputTitle, setInputTitle] = useState('');
	// const [inputAmount, setInputAmount] = useState('');
	// const [inputDate, setInputDate] = useState('');

	const [userInputs, setUserinputs] = useState({
		title: '',
		amount: '',
		date: '',
	});

	const titleChangeHandler = (e) => {
		// setInputTitle(e.target.value);
		setUserinputs((prevState) => {
			return {
				...prevState,
				title: e.target.value,
			};
		});
	};
	const amountChangeHandler = (e) => {
		// setInputAmount(e.target.value);
		setUserinputs((prevState) => {
			return {
				...prevState,
				amount: e.target.value,
			};
		});
	};
	const dateChangeHandler = (e) => {
		// setInputDate(e.target.value);
		setUserinputs((prevState) => {
			return {
				...prevState,
				date: e.target.value,
			};
		});
	};

	return (
		<form action="">
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="">Title</label>
					<input type="text" onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label htmlFor="">Amount</label>
					<input
						type="number"
						onChange={amountChangeHandler}
						min="0.01"
						step="0.01"
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="">Date</label>
					<input
						type="date"
						onChange={dateChangeHandler}
						min="2023-01-01"
						max="2023-12-31"
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
