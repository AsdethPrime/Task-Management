import React, { Component } from "react";
import { Paper, Container, TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { AddTask } from '../redux/actionCreators'

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTaskForm: false,
      title: "",
      description: ""
    };
    // Bind Method
    this.showTaskForm = this.showTaskForm.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
  }

  showTaskForm() {
    this.setState({
      showTaskForm: !this.state.showTaskForm
    });
  }

  titleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  descriptionChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  resetForm(event) {
      this.setState({
          showTaskForm: false, 
          title: '',
          description: ''
      })
      
  }

  addNewTask(){
      let {title, description } = this.state
      this.props.dispatch(AddTask(title, description))
  }

  render() {
    return (
      <div>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={this.showTaskForm}
        >
          ADD TASK
        </Button>
        <hr />
        {this.state.showTaskForm && (
          <Container>
            <Paper>
              <form onSubmit={this.addNewTask}>
                <label>
                  Title: <br />
                  <TextField
                    fullWidth
                    value={this.state.title}
                    onChange={this.titleChange}
                  />
                </label>
                <label>
                  Description: <br />
                  <TextField
                    fullWidth
                    value={this.state.description}
                    onChange={this.descriptionChange}
                  />
                </label>
                <label>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={this.addNewTask}
                  >
                    ADD NEW TASK
                  </Button>
                </label>
              </form>
            </Paper>
          </Container>
        )}
      </div>
    );
  }
}

export default connect()(NewTask);
