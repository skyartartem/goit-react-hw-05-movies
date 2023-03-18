import { useState } from 'react';
import { Form } from './SearchBar.styled';
const SearchBar = ({ handleSubmit }) => {
  const [search, setSearch] = useState('');

  const onChangeInput = evt => {
    setSearch(evt.currentTarget.value);
  };

  const resetForm = () => {
    setSearch('');
  };
  return (
    
    <Form
      onSubmit={evt => {
        evt.preventDefault();
        if (!search) {
          return alert('Enter text for search.');
        }
        handleSubmit(search);
        resetForm();
      }}
    >
      <input
        value={search}
        onChange={onChangeInput}
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <button type="submit">search</button>
    </Form>
  );
};

export default SearchBar;