import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';
import store from './components/Store';
import React from 'react'
import { Provider } from 'react-redux'



store.dispatch({
  type: 'add',
  data: {name : 'satish'}
})
store.subscribe(() =>{
  console.log('in subscribe', store.getState());
})

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <Contacts/>
    </div>
    </Provider>
  );
}

export default App;
