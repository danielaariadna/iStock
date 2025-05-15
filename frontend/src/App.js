import foto1 from './photos/1.jpg';
import foto2 from './photos/2.jpg';
import foto3 from './photos/3.jpg';
import foto4 from './photos/4.jpg';
import foto5 from './photos/5.jpg';
import foto6 from './photos/6.jpg';
import foto7 from './photos/7.jpg';

import './App.css';
import SquareGrid from './SquareGrid';
import ButtonAppBar from './NavBar';
import Footer from './Footer';

function App() {
  // Generar lista de fotos a mostrar
  var imageList = []
  for(var i = 0; i < 100; i++){
    var imageIndex = Math.floor(Math.random() * 8); // [0 - 3]
    switch(imageIndex){
      case 0:
        imageList.push(foto1);
        break;
      case 1:
        imageList.push(foto2);
        break;
      case 2:
        imageList.push(foto3);
        break;
      case 3:
        imageList.push(foto4);
        break;
      case 4:
        imageList.push(foto5);
        break;
      case 5:
        imageList.push(foto6);
        break;
      case 6:
        imageList.push(foto7);
        break;
    }
  }
  
  return (
    <div className="App">
      
      <ButtonAppBar/>
      <header className="App-header">
        <SquareGrid imageList={imageList}/>
      </header>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          No se que estoy haciendo
        </a>
        <SquareGrid imageList={imageList}/>
        <ImageContainer image={foto7} id={777}/>

        <Component imageList={imageList}/>

        
        
        


      </header>
    </div>
  );
  */
}

export default App;
