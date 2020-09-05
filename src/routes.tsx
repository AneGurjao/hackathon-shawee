import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import App from './App';
import Solicitation from './pages/Solicitation';
import Home from './pages/Home';
import Approved from './pages/Approved';

const Pagina404 = () => <div>Página 404</div>;

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/solicitacao" component={Solicitation} />
        <Route path="/emprestimo" component={Approved} />
        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
