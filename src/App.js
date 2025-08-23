import Navbar from './navbar';
import Home from './home';
import education from './education';
import internship from './internship';
import projects from './projects';
import contacts from './contacts';


function App() {
    return (
      <Router>
        <div className="app-container">
          <div className="overlay">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/internship" element={<Internship />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }