import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const HoveredList = () => {
  const { field } = useContext(AppContext);

  const getHoveredSquares = field.map((row, rowI) => {
    return row.map((col, colI) => {
      if (!col) return null;
      return (
        <li 
          className='hovered-squares__list-item'
          key={`${rowI}${colI}`}>
            row {rowI+1} col {colI+1}
          </li>
      )
    })
  })

    return (
      <div className='hovered-squares'>
        <h2 className='hovered-squares__title'>
          Hovered squares:
        </h2>
        <ul className='hovered-squares__list'>
          {getHoveredSquares}
        </ul>
      </div>
  );
}

export default HoveredList;
