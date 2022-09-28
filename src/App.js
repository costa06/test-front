import Bandeau from './components/blank/Bandeau';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Newsletter from './components/newsletter/newsletter';
import "./sass/index.scss";


function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Home/>
        <Bandeau/>
        <Newsletter/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
   
  );
}

export default App;
