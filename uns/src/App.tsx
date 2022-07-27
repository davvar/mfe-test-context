import React from 'react';
import ReactDOM from 'react-dom';
import { Consumer } from 'library/components';
import { service } from 'host/service';

import './index.css';

export const App = () => (
  <div className="container" style={{ border: '1px solid red' }}>
    <div>Name: uns</div>
    <h4 style={{ border: '1px solid black', margin: 10 }}>
      Context Consumer from <b>shared library</b> <Consumer />
    </h4>
    <h4 style={{ border: '1px solid black', margin: 10 }}>
      Service from <b>host</b> <button onClick={service.log}>click me to see alert</button>
    </h4>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
