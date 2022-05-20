import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Square = ({ rowIndex, colIndex }) => {
  const { field, setField } = useContext(AppContext);

  const mouseOverHandler =() => {
    const newField = field.map((row, rowI) => {
      if(rowIndex === rowI) {
        return row.map((col, colI) => (
          colIndex === colI ? !col : col
        ));
      }
      return row;
    });
    setField(newField);
  }

  return (
    <div 
      className={`square ${field[rowIndex][colIndex] ? 'square--blue' : ''}`}
      onMouseOver={mouseOverHandler}>
    </div>
  )

}

export default Square;