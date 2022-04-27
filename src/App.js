import { Navbar,Home,About, Product, Contact, Footer, FullProduct, Login, Register } from './components/routes/index.js';
import { Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/full-product" component={FullProduct} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
