import { Navbar,Home,About, Product, Contact, Footer } from './components/index';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Home />
      <About /> 
      <Product />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
