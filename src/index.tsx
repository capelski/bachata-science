import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch, useParams } from 'react-router-dom';
import { Glossary } from './components/glossary';
import { Home } from './components/home';
import { Position } from './components/position';
import { PositionsList } from './components/positions-list';
import { Step } from './components/step';
import { StepsList } from './components/steps-list';
import './style/main.scss';

interface ParametrizedRouteProps<T> {
    component: React.FC<T>;
    parameterName: keyof T;
}

function ParametrizedRoute<T>(props: ParametrizedRouteProps<T>) {
    const parameters = useParams();
    const parameterValue = parameters[props.parameterName as string];
    const componentProps = { [props.parameterName]: parameterValue } as T;
    return props.component(componentProps);
}

// tslint:disable-next-line:variable-name
const App = () => (
    <BrowserRouter>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/?$modena=bachata-science">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/glossary?$modena=bachata-science">Glosario</Link>
                    </li>
                    <li>
                        <Link to="/positions?$modena=bachata-science">Posiciones</Link>
                    </li>
                    <li>
                        <Link to="/steps?$modena=bachata-science">Pasos</Link>
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
