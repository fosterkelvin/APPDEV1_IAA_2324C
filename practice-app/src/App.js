import './App.css';
import Navbar from './myComp/navbar.js';
import AsideList from './myComp/asideList.js';
import Main from './myComp/main.js';
import Footer from './myComp/footer.js';

function App() {
  return (
    <div className="container-fluid">
      <nav className="container-fluid">
        <Navbar />
      </nav>
      <br></br>
      <div className="container-fluid">
        <div className="row">
          <aside className="col-12 col-md-4 col-lg-3">
            <AsideList />
          </aside>
          <main className="col-12 col-md-8 col-lg-9">
            <Main />
          </main>
        </div>
      </div>
      <br />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
