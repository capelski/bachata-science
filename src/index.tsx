import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useParams,
} from 'react-router-dom';
import { Glossary } from './components/glossary';
import { Home } from './components/home';
import { Position } from './components/position';
import { PositionsList } from './components/positions-list';
import { Step } from './components/step';
import { StepsList } from './components/steps-list';

interface ParametrizedRouteProps<T> {
    component: React.FC<T>;
    parameterName: keyof T;
}

function ParametrizedRoute<T>(props: ParametrizedRouteProps<T>) {
    const parameters = useParams();
    const parameterValue = parameters[props.parameterName as string];
    const componentProps = { [props.parameterName]: parameterValue } as T;
    return props.component(componentProps);
};

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
                    <ParametrizedRoute component={Position} parameterName="positionId" />
                </Route>
                <Route path="/positions">
                    <PositionsList />
                </Route>
                <Route path="/step/:stepId">
                    <ParametrizedRoute component={Step} parameterName="stepId" />
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