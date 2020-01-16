const initState = {arr:[]}

let sequence = 0;

export default function(state = initState, action) {

    const {type, data} = action

    if(type !== 'TODO'){
        return state
    }

    const {oper, value} = data

    if(oper === 'ADD'){

        const todo = {tno:++sequence, title: value}

        return {arr: state.arr.concat(todo)}
    }


    console.log("todo reducer...........", action)

    return state
}