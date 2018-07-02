import React from 'react';

const Search = ({ name, value, placeholder, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
      />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Search;
