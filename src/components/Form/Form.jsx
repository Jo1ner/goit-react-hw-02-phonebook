import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = evt => {
    evt.preventDefault();

    const formData = {
      name: this.state.name,
      number: this.state.number,
    };
    this.props.createContact(formData);

    this.setState({
      name: '',
      number: '',
    });
  };

  handleInputChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <label>
            <p>Number</p>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
