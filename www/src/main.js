import React from 'react';
import ReactDOM from 'react-dom';
require('./style/main.scss');

import Fetch from './javascripts/fetch';

ReactDOM.render(
  <div>
    ~LeaderBoard~
    <Fetch />
  </div>,
  document.getElementById('render')
);
