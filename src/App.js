import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./components/Products/Product"
import Product_data from './components/Products/Product_data';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      
      <Products />
      
    </div>
  );
}

export default App;
