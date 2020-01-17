import React, { Component } from "react";
import { Grid, AppBar, Button, Select } from "@material-ui/core";
import { connect } from "react-redux";
import { DeleteTask, ChangeStatus } from "../redux/actionCreators";

let taskStatus = ["NEW", "INPROGRESS", "COMPLETED"];

class TaskItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: this.props.task.status,
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleClick () {
        this.props.dispatch(DeleteTask(this.props.task.id));
    };

    handleChange(event) {
        this.setState({
            value: event.target.value,
        }, () => this.props.dispatch(ChangeStatus(this.props.task.id, this.state.value )))
        

    }
  render() {
    return (
      <Grid item xs={4} style={style}>
        <AppBar position="relative">{this.props.task.title}</AppBar>
        <p>{this.props.task.description}</p>
        <hr />
        <p>{this.props.task.status}</p>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={this.handleClick}
        >
          DELETE
        </Button>
        <Select fullWidth native value={this.state.value} onChange={this.handleChange}>
          {taskStatus.map(status => (
            <option value={status}>{status}</option>
          ))}
        </Select>
      </Grid>
    );
  }
}

let style = {
  borderStyle: "outset"
};

export default connect()(TaskItem);
