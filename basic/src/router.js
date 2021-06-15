import { HashRouter as Router, Route } from 'react-router-dom';
import App from './App';
import MicroAppWrapper from './microAppWrapper';

export default function RouterConfig() {
  return (
    <Router>
      <Route path="/about" component={MicroAppWrapper}/>
      <Route path="/" exact component={App}/>
    </Router>
  )
};