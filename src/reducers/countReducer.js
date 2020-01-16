
const initState = {count:0}


export default function(state = initState, action) {

    const {type, data} = action

    if(type !== 'COUNT'){
        return state
    }

    console.log("count reducer...........", action)

    return state
}