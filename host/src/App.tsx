import React from 'react';
import ReactDOM from 'react-dom';
import { Consumer, Context } from 'library/components';
import { App as Uns } from 'uns/src';
console.log({ Context });
console.log({ Consumer });

import './index.css';

const App = () => (
  <div style={{ border: '1px solid blue', padding: 20 }}>
    <h2>Name: host</h2>
    <Context value={() => alert('context worked')}>
      <div className="container">
        <Consumer />
        <Uns />
      </div>
    </Context>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
