import React, { Component } from 'react';

const Filter = (props) => {
  return (
    <input
      type="text"
      name="searchTerm"
      value={props.searchTerm}
      onChange={props.handleSearchChange}
    />
  )

}

export default Filter;
