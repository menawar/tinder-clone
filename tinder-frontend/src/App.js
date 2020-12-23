
import './App.css';
import SwipeButtons from './components/Button/SwipeButtons';
import TinderCards from './components/Card/TinderCards';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="app">
    <Header />
    <TinderCards />
    <SwipeButtons />
    </div>
  );
}

export default App;
