import { RiCloseCircleLine } from 'react-icons/ri';


const Todo = ({todos, removeTodo}) => {

	return todos.map((todo, index) => (
		<div className='todo-row' key={index}>
			<div key={todo.id}>
				{todo.text}
			</div>
			<div className='icons'>
				<RiCloseCircleLine
					onClick={() => removeTodo(todo.id)}
					className='delete-icon'
				/>
			</div>
		</div>
	))
}

export default Todo;