import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import App from './App';
import Solicitation from './pages/Solicitation';
import Home from './pages/Home';
import Approved from './pages/Approved';
import Goals from './pages/Goals';
import Questions from './pages/questions/Questions';
import Disapproved from './pages/Disapproved';
import FinancialEducation from './pages/FinancialEducation';
import PositiveFinancial from './pages/PositiveFinantial';
import ValueScreen from './pages/ValueScreen';

const Pagina404 = () => <div>Página 404</div>;

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/solicitacao" component={Solicitation} />
        <Route path="/objetivo" component={Goals} />
        <Route path="/perguntas" component={Questions} />
        <Route path="/emprestimo/aprovado" component={Approved} />
        <Route path="/emprestimo/limite" component={ValueScreen} />
        <Route path="/emprestimo/reprovado" component={Disapproved} />
        <Route path="/educacao-financeira" component={FinancialEducation} />
        <Route path="/educacao-positiva" component={PositiveFinancial} />
        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
