import { Navbar,Home,About, Services, Contact, Footer } from './components/index';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Home />
      <About /> 
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
