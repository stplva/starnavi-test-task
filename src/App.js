import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import Field from './components/Field';
import Header from './components/Header';
import HoveredList from './components/HoveredList';
import AppContext from './context/AppContext';

const App = () => {
  const [ modes, setModes ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  const [ activeMode, setActiveMode ] = useState(0);
  const [ isStarted, start ] = useState(false);
  const [ field, setField ] = useState([]);

  useEffect(() => {
    fetch('https://demo7919674.mockable.io/')
    .then(response => {
      if(!response.ok) {
        console.log('STATUS: ', response.status);
      }
      return response.json()
    })
    .then(data => {
      setModes(data);
      setError(null);
      console.log('Data successfully fetched!');
    })
    .catch(err => {
      setError(err.message);
      setModes(null);
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [])

  const selectHandler = useCallback(e => {
    const mode = +e.target.value;
    setActiveMode(mode);

    if(mode) {
      setField(Array(mode).fill(Array(mode).fill(false))); //generate a field
    }
  });

  const startHandler = useCallback(() => start(true), []);

  const renderOptions = ({ field, name }) => <option value={field} key={field}>{name}</option>;

  return (
    <AppContext.Provider value={{ field, setField }}>
    <div className="App">
      <div className='grid-wrapper'>
        <Header />
        <main>
          <div className='select-group'>
            <select 
              className='select-mode'
              value={activeMode} 
              onChange={selectHandler}>

              <option value={0} disabled>Pick a mode</option>
              {modes && modes.map(renderOptions)}
            </select>
            <button 
              className='start-btn'
              onClick={startHandler} 
              disabled={activeMode === 0}
              >START</button>
          </div>
          {loading && <p>Loading...</p>}
          {error && <div>Error fetching data.</div>}
          {isStarted && 
            <Field />
          }
        </main>
        {isStarted && 
          <aside>
              <HoveredList />
          </aside>
        }
      </div>
    </div>
    </AppContext.Provider>
  );
}

export default App;
