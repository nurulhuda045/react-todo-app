import React, { useState } from "react";


const AddTodo = (props) => {
	const [input, setInput] = useState('')

	const handleChange = e => {
		setInput(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()

		props.onSubmit({
			id: Math.floor(Math.random() * 1000000),
			text: input
		})

		setInput('')
	}

	return (
		<form onSubmit={handleSubmit} className='todo-form'>
			<input type='text'
				name='text'
				placeholder='Add a Todo'
				value={input}
				onChange={handleChange}
				className='todo-input'
			/>
			<button className='todo-button'>Add Todo</button>
		</form>
)};

export default AddTodo;