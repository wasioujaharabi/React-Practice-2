import './App.css';
import Films from './Components/Films';
import Navbar from './Components/Navbar';
import Data from './Data';
import Hero from './Components/Hero';
function App() {
  const films= Data.map(film=>{
    return(
      <Films
        key = {film.id}
        film={film}
      />
    )
  })
  
  return (
    <div>
      <Navbar/>
      <Hero />
      <section className="cards-list">
        {films}
      </section>
    </div>
    
  );
}

export default App;
