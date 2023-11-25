import React from 'react';
import ReactDOM from 'react-dom';

//const heading = React.createElement('div', {id: 'parent'}, React.createElement('h1', {}, 'Hello React'));

// React Element
const jsxheading = <div id = "parent">
    <h1>Hello React Element</h1>
</div>

// React functional component
const HeadingComponent = () => ( //skipped return as this functions job is only to return one element
    <div id = "parent">
        {jsxheading}
        <h1>Hello React component</h1>
    </div>
);
//jsxHeading is a variable.
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(jsxheading); 
root.render(<HeadingComponent/>);