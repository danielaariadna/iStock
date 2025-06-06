import ButtonAppBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function LayoutConNavbar({usuarioActual}) {
  return (
    <div className="App">
      <ButtonAppBar usuarioActual={usuarioActual} />
      <header className="App-header">
        <Outlet />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
