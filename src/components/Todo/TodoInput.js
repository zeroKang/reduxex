import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

const TodoInput = () => {

    const dispatch = useDispatch()
    const [text, setText] = useState('')

    return (
        <div>
            <h1>Todo Input</h1>
            <input onChange={(e) => setText(e.target.value)} value={text}></input>
            <button onClick={() => { dispatch({type:'TODO', data:{oper:'ADD', value:text}}) }}>SAVE</button>
        </div>
    )
}

export default TodoInput