import React from 'react';
import PropTypes from 'prop-types';
import { FilterForm, FilterField } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { filterContact } from 'redux/sliceFilter';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => {
    dispatch(filterContact(value));
  };
  return (
    <FilterForm>
      <span className="name">Find contacts by name</span>
      <FilterField
        onChange={onChange}
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </FilterForm>
  );
};

export default Filter;
