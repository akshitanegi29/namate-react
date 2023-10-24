import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement('div', {id: 'parent'}, React.createElement('h1', {}, 'Helle React'));
const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('aboveRoot'));
root2.render(React.createElement('h1',null,'above root child'))
root.render(heading); 