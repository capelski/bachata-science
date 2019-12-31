import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div>React part</div>;

const appPlaceholder = document.getElementById('app-placeholder');
ReactDOM.render(<App />, appPlaceholder);