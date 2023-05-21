import './App.css';
import StockList from './Stock';

function App() {
  return (
    <div className="App">
      <div className='maindiv'>
        <h2>My Stock App</h2>
        <div className="stocklist-container">
          <StockList />
        </div>
      </div>
    </div>
  );
}

export default App;
