import React from 'react';
import ReactDOM from 'react-dom';
import { Intro } from './components/intro';
import { AllSteps } from './components/all-steps';

const App = () => (
    <React.Fragment>
        <Intro />
        <AllSteps />
    </React.Fragment>
);

const appPlaceholder = document.getElementById('app-placeholder');
ReactDOM.render(<App />, appPlaceholder);