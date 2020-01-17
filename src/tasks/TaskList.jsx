import React, { Component } from 'react'
import {
    Paper, 
    Grid, 
} from '@material-ui/core'
import TaskItem from './TaskItem'
import { connect } from 'react-redux'

class TaskList extends Component {
    render() {
        return (
            <Paper>
                <Grid container spacing={6}>
                    {this.props.tasks.map(task => <TaskItem task={task} />)}
                </Grid>
            </Paper>

        )
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskList)