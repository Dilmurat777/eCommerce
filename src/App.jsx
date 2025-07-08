import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardPage from './page/CardPage';
import ProductDetails from './page/ProductDetails';
import Header from './components/Header';
import Home from './page/Home';
import { Provider } from 'react-redux';
import { store } from './App/Store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<CardPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
