import React, { Component } from "react";
import "./App.css";
import Phonebook from "./components/Phonebook";
import Contacts from "./components/Contacts";
import { nanoid } from "nanoid";

const initialContacts = [
  {
    id: nanoid(),
    name: "Rosie Simpson",
    number: "123-31-12",
  },
  {
    id: nanoid(),
    name: "Hermione Kline",
    number: "123-32-12",
  },
  {
    id: nanoid(),
    name: "Eden Clements",
    number: "123-33-12",
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [...initialContacts],
      filter: "",
    };
  }

  handleContact = (name, number) => {
    const isDuplicate = this.state.contacts.some(
      (contact) => contact.name.toLowerCase().trim() === name.toLowerCase().trim(),
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts`);
      return false;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
    
    return true;
  };

  handleFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleDelete = (idToDelete) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== idToDelete,
      ),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <div className="w-full mx-auto px-1 pt-2">
        <Phonebook handleContact={this.handleContact} />
        <Contacts
          contacts={filteredContacts}
          filter={filter}
          handleFilter={this.handleFilter}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
