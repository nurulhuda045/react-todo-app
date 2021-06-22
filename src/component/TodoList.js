import React, { useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo'

const TodoList = () => {
	const [todos, setTodos] = useState([])

	const addTodo = (todo) => {
		if(!todo.text) {
			return
		}

		const newTodos = [todo, ...todos];

		setTodos(newTodos);
	}

	const removeTodo = id => {
		const remove = [...todos].filter(todo => todo.id !== id)

		setTodos(remove)
	}


	return (
		<div>
			<h1>Todo List</h1>
			<AddTodo onSubmit={addTodo}/>
			<Todo todos={todos} removeTodo={removeTodo} />
		</div>
	)
}

export default TodoList;