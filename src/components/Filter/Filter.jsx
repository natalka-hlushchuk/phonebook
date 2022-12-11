import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filterContact } from 'redux/contacts/sliceFilter';
import { FilterForm, FilterField } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
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
