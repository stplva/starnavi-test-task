import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Square from './Square';

const Field = () => {
  const {field} = useContext(AppContext);

    return (
    <div className='field'>
      {field && field.map((row, rowIndex) => (
        <div key={rowIndex} className='field__row'>
          {row.map((id, colIndex) =>(
              <Square 
                key={`${rowIndex}${colIndex}`} 
                rowIndex={rowIndex} 
                colIndex={colIndex} />
            ))}
        </div>))}
    </div>
  );
}

export default  Field;
