import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useState } from 'react';
import store, { persistor } from './redux';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import OnlineStoreContext from './context/OnlineStoreContext';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import Checkout from './pages/Checkout';
import PaymentSuccess from './pages/PaymentSuccess';

function App() {
  const [categoryID, setCategoryID] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [query, setQuery] = useState('');
  const [rating, setRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (

    <OnlineStoreContext.Provider
      value={ {
        setCategoryID,
        setQuery,
        setRating,
        setCategoryName,
        setIsOpen,
        categoryID,
        query,
        rating,
        categoryName,
        isOpen,
      } }
    >
      <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <RegisterUser /> } />
            <Route path="/cart" element={ <Cart /> } />
            <Route path="/productDetails/:id" element={ <ProductDetails /> } />
            <Route path="/checkout" element={ <Checkout /> } />
            <Route path="/success" element={ <PaymentSuccess /> } />
          </Routes>
        </PersistGate>
      </Provider>
    </OnlineStoreContext.Provider>
  );
}

export default App;
