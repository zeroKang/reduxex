import React from 'react'
import {connect} from 'react-redux'

const CountDisplay = (props) => {
    return(
        <div>
            <h1>COUNT: {props.count}</h1>
            <h2>{props.name}</h2>
        </div>    
    )
}

const mapStateToProps = ({countReducer}) => {
    
    return {count:countReducer.count}
}

export default connect(mapStateToProps)(CountDisplay)