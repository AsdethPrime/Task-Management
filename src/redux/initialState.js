let uuid = require('uuid/v4')

let state = {
    tasks : [
        {id: uuid(), title: 'Title 1', description: 'description 1', status: 'NEW'},
        {id: uuid(), title: 'Title 2', description: 'description 2', status: 'NEW'},
        {id: uuid(), title: 'Title 3', description: 'description 3', status: 'INPROGRESS'},
        {id: uuid(), title: 'Title 4', description: 'description 4', status: 'INPROGRESS'},
        {id: uuid(), title: 'Title 5', description: 'description 5', status: 'COMPLETED'},
    ]
}

export default state