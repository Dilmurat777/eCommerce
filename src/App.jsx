import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardPage from './page/CardPage';
import ProductDetails from './page/ProductDetails';
import Header from './components/Header';
import Home from './page/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="card" element={<CardPage />} />
        <Route path="product" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
