import React, { Component } from "react";

export default class Contacts extends Component {
  render() {
    const { contacts, filter, handleFilter, handleDelete } = this.props;

    return (
      <div className="flex flex-col gap-4">
        <h2 className="mb-2 font-bold text-2xl">Contacts</h2>
        <div>
          <h3>Find contacts by name</h3>
          <input
            type="text"
            placeholder="name"
            value={filter}
            onChange={handleFilter}
            className="w-full max-w-50 border border-gray-500 rounded-md focus:outline-none hover:opacity-80 px-2"
          />
        </div>
        <ol className="ml-10 flex flex-col gap-2">
          {contacts.map((item) => (
            <li key={item.id} className="flex flex-row gap-5">
              <div className="flex flex-row gap-1">
                <h4>{item.name}:</h4>
                <a
                  href={`tel:${item.number}`}
                  className="transition-all hover:opacity-60"
                >
                  {item.number}
                </a>
              </div>

              <button
                onClick={() => handleDelete(item.id)}
                type="button"
                className="py-1 px-2 bg-red-300 transition-all hover:bg-red-600 hover:text-white hover:cursor-pointer rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
