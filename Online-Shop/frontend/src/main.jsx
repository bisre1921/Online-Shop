import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter , createRoutesFromElements , Route , RouterProvider} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx'
import './assets/styles/index.css'
import './assets/styles/bootstrap.custom.css'
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import {Provider} from "react-redux";
import store from "./store.jsx";
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
