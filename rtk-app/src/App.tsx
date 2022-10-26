import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
  const dispatch = useAppDispatch();
  const {users, isLoading, error} = useAppSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {JSON.stringify(users, null, 2)}
      </header>
    </div>
  );
}

export default App;
