import React, { Component } from 'react';
import { Alert, Button, Jumbotron, Form } from 'reactstrap';
import TextInput from './TextInput';

// const user = User.objects.all()

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    username: '',
    password: '',
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.username, this.state.password)
  }

  handleInputChange() {
    // const target = event.target,
          // value  = target.type
  }


  render() {
    const errors = this.props.errors || {}
    return (
      <Jumbotron className = 'container'>
        <Form onSubmit = {this.onSubmit}>
          <h1>Sign Up</h1>
          {
            errors.non_field_errors ?
              <Alert color = 'danger'>
                {errors.non_field_errors}
              </Alert> : ''
          }
          <TextInput name = 'username' label = 'Username'
                     error = {errors.username}
                     onChange = {this.handleInputChange} />
          <TextInput name = 'password' label = 'Password'
                     error = {errors.password} type = 'password'
                     onChange = {this.handleInputChange} />
          <Button type = 'submit' color = 'primary' size='lg'>Submit</Button>
        </Form>
      </Jumbotron>
    )
  }
}
