import './App.css';
import Navbar from './myComp/navbar.js';
import AsideList from './myComp/asideList.js';
import Main from './myComp/main.js';

function App() {
  return (
    <div>
      <navbar className="container">
        <Navbar/>
      </navbar>
      <div classNamee="container row">
        <aside className="col-2">
          <AsideList/>
        </aside>
        <main className="col-9">
          <Main/>
        </main>
      </div>
      <footer></footer>
    </div>

  );
}

export default App;
