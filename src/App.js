import React, { createContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import ProductDescription from './components/ProductDescription/ProductDescription';
import Login from './components/Login/Login';
import { AuthContextProvider, PrivateRoute } from './components/Login/useAuth';
import Shipment from './components/Shipment/Shipment';




function App() {
  return (
    <div >
      <AuthContextProvider>

        <Header></Header>

        <Router>

          <Switch>
            <Route exact path='/'>
              <Shop></Shop>
            </Route>
            <Route path='/shop' >
              <Shop></Shop>
            </Route>
            <Route path='/review'>
              <Review></Review>
            </Route>
            <Route path='/inventory'>
              <Inventory></Inventory>
            </Route>

            <Route path='/login'>
                <Login></Login>
            </Route>

            <PrivateRoute path='/shipment'>
                <Shipment></Shipment>
            </PrivateRoute>
            
            <Route path='/product/:productKey'>
              <ProductDescription></ProductDescription>
            </Route>
          
            <Route path='*'>
              <NotFound></NotFound>
            </Route>


          </Switch>

        </Router>
      </AuthContextProvider>
    
    </div>
  );
}

export default App;
