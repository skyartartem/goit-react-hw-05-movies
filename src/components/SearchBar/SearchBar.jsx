import { useState } from 'react';
const SearchBar = ({ handleSubmit }) => {
  const [search, setSearch] = useState('');

  const onChangeInput = evt => {
    setSearch(evt.currentTarget.value);
  };

  const resetForm = () => {
    setSearch('');
  };
  return (
    <form
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
        // className={css.Input}
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchBar;