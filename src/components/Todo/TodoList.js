import React from 'react'
import {connect} from 'react-redux'

const TodoList = ({arr}) => {

    const list = arr.map(t => <li key={t.tno}> {t.tno}------------{t.title}</li>)

    return(
        <ul>
            {list}
        </ul>
    )
}


const mapStateToProps = ({todoReducer}) => {

    console.log(todoReducer)

    return {arr:todoReducer.arr}

}

export default connect(mapStateToProps)(TodoList)