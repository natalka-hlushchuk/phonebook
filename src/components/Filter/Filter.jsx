import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <label>
        <span>Find contacts by name</span>
        <input
          onChange={this.props.onAddFilter}
          type="text"
          name="filter"
          value={this.props.filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    );
  }
}

export default Filter;
