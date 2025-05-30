import ButtonAppBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function LayoutConNavbar() {
  return (
    <div className="App">
      <ButtonAppBar />
      <header className="App-header">
        <Outlet />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
