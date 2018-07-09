import React from 'react';
import Cocktail from './Cocktail';

const List = (props) => {
  // console.log('List props', props)
  return (
    <ul>
      {
        props.cocktails.map(cocktail => {
            return <Cocktail onClick={props.select} key={cocktail.id} {...cocktail} showDetails={false} />;
        })
      }
    </ul>
  )
}

export default List;
