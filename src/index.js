import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import FormContainer from './containers/FormContainer.js';

function App () {
  return (
    <div className = 'formContainer'>
      <FormContainer />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
