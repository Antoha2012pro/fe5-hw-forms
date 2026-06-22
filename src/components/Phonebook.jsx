import React, { Component } from "react";

export default class Phonebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
    };
  }

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleNumber = (event) => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const name = this.state.name.trim();
    const number = this.state.number.trim();
    if (!name) return;
    if (!number) return;

    const isAdded = this.props.handleContact(name, number);
    if (isAdded) {
      this.setState({
        name: "",
        number: "",
      });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">Phonebook</h2>
        <form
          onSubmit={this.handleSubmit}
          className="border py-2 px-1 max-w-md flex flex-col gap-1"
          action=""
        >
          <label>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleName}
            className="w-full max-w-50 border border-gray-500 rounded-md focus:outline-none hover:opacity-80 px-2"
          />
          <label>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleNumber}
            className="w-full max-w-50 border border-gray-500 rounded-md focus:outline-none hover:opacity-80 px-2"
          />
          <button
            type="submit"
            className="self-start mt-6 bg-blue-500 hover:opacity-80 hover:cursor-pointer text-white font-medium py-1 px-4 rounded transition-all"
          >
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
