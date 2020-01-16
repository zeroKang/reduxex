import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


const TodoWrapper = () => {

    return (
        <div>
            <TodoInput></TodoInput>
            <TodoList></TodoList>
        </div>
    )
}

export default TodoWrapper