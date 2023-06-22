import './App.css';
import HomeComponents from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HourlyForecast from './Components/HourlyForecast';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponents />} />
          <Route path="/forecast" element={<HourlyForecast />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;




























// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();






// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
