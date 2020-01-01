import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import { Glossary } from './components/glossary';
import { Home } from './components/home';
import { Position } from './components/position';
import { PositionsList } from './components/positions-list';
import { Step } from './components/step';
import { StepsList } from './components/steps-list';

const App = () => (
    <BrowserRouter>
        <div>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Inicio</Link>
                    </li>
                    <li>
                    <Link to="/glossary">Glosario</Link>
                    </li>
                    <li>
                    <Link to="/positions">Posiciones</Link>
                    </li>
                    <li>
                    <Link to="/steps">Pasos</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/glossary">
                    <Glossary />
                </Route>
                <Route path="/position/:positionId">
                    <Position />
                </Route>
                <Route path="/positions">
                    <PositionsList />
                </Route>
                <Route path="/step/:stepId">
                    <Step />
                </Route>
                <Route path="/steps">
                    <StepsList />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
);

const appPlaceholder = document.getElementById('app-placeholder');
ReactDOM.render(<App />, appPlaceholder);