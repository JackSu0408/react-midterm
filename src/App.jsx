import { BrowserRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';
import { persistor, store } from './redux/store';
import MainRoutes from './routes/MainRoutes';
import { feedProducts } from './api/fireStore'; 

// feedProducts(); // Initialize Firestore with products data

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}></PersistGate>  
      <HelmetProvider context={{}}>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}

export default App;