import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterContact } from 'redux/contacts/sliceFilter';
import { FilterForm, FilterField } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => {
    dispatch(filterContact(value));
  };
  return (
    <FilterForm>
      <FilterField
        onChange={onChange}
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Find contacts by name"
        required
      />
    </FilterForm>
  );
};
