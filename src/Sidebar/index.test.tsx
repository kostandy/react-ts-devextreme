import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sidebar/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
