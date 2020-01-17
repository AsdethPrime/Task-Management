import { createStore } from 'redux'
import initialState from './initialState'
import reducer from './reducer'

let store = createStore(reducer, initialState )
export default store
