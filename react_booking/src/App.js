import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';
import { HomeTemplates } from './templates/HomeTemplates/HomeTemplates';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';



export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplates path="/home" exact Component={Home} />
        <HomeTemplates path="/contact" exact Component={Contact} />
        <HomeTemplates path="/news" exact Component={News} />
        <Route path="/login" exact Component={Login} />
        <Route path="/register" exact Component={Register} />
        <HomeTemplates path="/" exact Component={Home} />
      </Switch>

    </Router>

  );
}

export default App;
