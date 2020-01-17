export default function reducer(state, actions) 
{
    if (actions.type === 'ADD_TASK') {
        return {
            tasks: state.tasks.concat(actions.payload)
        }
    }

    if (actions.type === 'DELETE_TASK'){
        return {
            tasks: state.tasks.filter( task => task.id !== actions.payload.id )
        }
    }

    if (actions.type === 'CHANGE_STATUS') {
        return {
            tasks: state.tasks.map(task => task.id === actions.payload.id ? Object.assign({}, task, { status: actions.payload.status}) : task)
        }
    }
    return state

}

