const uuid = require('uuid/v4')

export function AddTask(title, description){
    return {
        type: 'ADD_TASK',
        payload: {
            id: uuid(), 
            title: title, 
            description: description, 
            status: 'NEW'
        }
    }
}

export function DeleteTask(id) {
    return {
        type: 'DELETE_TASK',
        payload: {
            id: id
        }
    }
}

export function ChangeStatus(id, status) {
    return {
        type: 'CHANGE_STATUS',
        payload: {
            id: id, 
            status: status
        }
    }
}
